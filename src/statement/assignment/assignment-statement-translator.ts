import { ParameterStatementTree, String } from '@xon/core';
import { getParameterTranslator } from '../../parameter/parameter-translator-helper';
import { StatementTranslator } from '../statement-translator';

export class AssignmentStatementTranslator implements StatementTranslator {
  constructor(private tree: ParameterStatementTree) {}

  toString(): String {
    const parameter = getParameterTranslator(this.tree.parameter, false);
    return parameter.toString();
  }
}
