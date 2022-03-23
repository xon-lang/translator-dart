import { IdExpressionTree, String } from '@xon/core';
import { ExpressionTranslator } from '../expression-translator';

export class IdExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: IdExpressionTree, private isType: boolean) {}

  toString(): String {
    return this.tree.name.text;
  }
}
