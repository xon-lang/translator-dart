import { LiteralExpressionTree, String } from '@xon/core';
import { ExpressionTranslator } from '../expression-translator';

export class LiteralExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: LiteralExpressionTree, private isType: boolean) {}

  toString(): String {
    return this.tree.toString();
  }
}
