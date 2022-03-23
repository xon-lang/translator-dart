import { ReturnStatementTree, String } from '@xon/core';
import { getExpressionTranslator } from '../../expression/expression-translator-helper';
import { StatementTranslator } from '../statement-translator';

export class ReturnStatementTranslator implements StatementTranslator {
  constructor(private tree: ReturnStatementTree) {}

  toString(): String {
    if (this.tree.value) {
      const value = getExpressionTranslator(this.tree.value, false);
      return `return ${value}`;
    }
    return `return`;
  }
}
