import { GroupExpressionTree, String } from '@xon/core';
import { ExpressionTranslator } from '../expression-translator';
import { getExpressionTranslator } from '../expression-translator-helper';

export class GroupExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: GroupExpressionTree, private isType: boolean) {}

  toString(): String {
    return `(${getExpressionTranslator(this.tree.expression, this.isType)})`;
  }
}
