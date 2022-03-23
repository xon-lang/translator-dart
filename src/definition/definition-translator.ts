import { DefinitionTree, NullableExpressionTree, String } from '@xon/core';
import { getAttributeTranslators } from '../attribute/attribute-translator-helper';
import { getBodyTranslator } from '../body/body-translator-helper';
import { getExpressionTranslator } from '../expression/expression-translator-helper';
import { getParameterTranslators } from '../parameter/parameter-translator-helper';
import { Translator } from '../translator';

export class DefinitionTranslator implements Translator {
  constructor(private tree: DefinitionTree) {}

  toString(): String {
    let parameters = getParameterTranslators(this.tree.parameters, false).join(', ');
    let base =
      (this.tree.base && ' extends ' + getExpressionTranslator(this.tree.base, false)) || '';
    const properties = this.tree.attributes
      .filter((x) => !x.isMethod)
      .map((x) => {
        const modifier = (x.name.text.startsWith('_') && 'private ') || '';
        const nullable = (x.type instanceof NullableExpressionTree && '?') || '';
        const type = ': ' + (getExpressionTranslator(x.type, true) || 'any');
        return modifier + x.name + nullable + type;
      })
      .join('\n');

    const initProperties = this.tree.attributes
      .filter((x) => !x.isMethod && x.body)
      .map((x) => `this.${x.name} = ${getBodyTranslator(x.body)}`)
      .join('\n');

    const superCall = (base && '  super()\n') || '';

    let constructor =
      (initProperties &&
        `constructor(${parameters}) {\n${superCall}${initProperties.replace(
          /^(.+)/gm,
          '  $1',
        )}\n}`) ||
      '';

    const methodsWithBody = getAttributeTranslators(
      this.tree.attributes.filter((x) => x.isMethod && x.body),
    )
      .map((x) => {
        const result = x.toString();
        const modifier = (result.startsWith('_') && 'private ') || '';
        return modifier + result;
      })
      .join('\n\n');
    const methodsWithNoBody = getAttributeTranslators(
      this.tree.attributes.filter((x) => x.isMethod && !x.body),
    )
      .map((x) => {
        const result = x.toString();
        const modifier = (result.startsWith('_') && 'private ') || '';
        return modifier + result;
      })
      .join('\n');
    const attributes =
      (this.tree.attributes.length &&
        '{\n' +
          [properties, constructor, methodsWithBody, methodsWithNoBody]
            .filter(Boolean)
            .join('\n\n')
            .replace(/^(.+)/gm, '  $1') +
          '\n}') ||
      '{}';
    return `export class ${this.tree.name}${base} ${attributes}`;
  }
}
