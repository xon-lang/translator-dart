import { NullableExpressionTree, String } from '@xon/core';
import { ExpressionTranslator } from '../expression-translator';
import { getExpressionTranslator } from '../expression-translator-helper';

export class NullableExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: NullableExpressionTree, private isType: boolean) {}

  toString(): String {
    if (this.isType) {
      return `(${getExpressionTranslator(this.tree.value, this.isType)} | None)`;
    }
    return `${getExpressionTranslator(this.tree.value, this.isType)}?`;
  }
}
