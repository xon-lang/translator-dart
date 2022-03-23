import { ExpressionStatementTree, String } from '@xon/core';
import { getExpressionTranslator } from '../../expression/expression-translator-helper';
import { StatementTranslator } from '../statement-translator';

export class ExpressionStatementTranslator implements StatementTranslator {
  constructor(private tree: ExpressionStatementTree) {}

  toString(): String {
    return getExpressionTranslator(this.tree.expression, false).toString();
  }
}
