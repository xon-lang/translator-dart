import { ArrayExpressionTree, String } from '@xon/core';
import { getParameterTranslators } from '../../parameter/parameter-translator-helper';
import { ExpressionTranslator } from '../expression-translator';

export class ArrayExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: ArrayExpressionTree, private isType: boolean) {}

  toString(): String {
    const items = getParameterTranslators(this.tree.parameters, this.isType);
    return `[${items.join(', ')}]`;
  }
}
