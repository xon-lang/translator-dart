import { PreprocessorExpressionTree, String } from '@xon/core';
import { ExpressionTranslator } from '../expression-translator';

export class PreprocessorExpressionTranslator implements ExpressionTranslator {
  constructor(private tree: PreprocessorExpressionTree, private isType: boolean) {}

  toString(): String {
    return this.tree.value;
  }
}
