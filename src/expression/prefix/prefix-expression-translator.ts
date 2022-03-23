import { PrefixExpressionTree, String } from '@xon/core';
import { ExpressionTranslator } from '../expression-translator';
import { getExpressionTranslator } from '../expression-translator-helper';

export class PrefixExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: PrefixExpressionTree, private isType: boolean) {}

  toString(): String {
    const idMap = {
      not: '!',
    };
    const id = idMap[this.tree.name.text] || this.tree.name.text;
    return `${id}${getExpressionTranslator(this.tree.value, this.isType)}`;
  }
}
