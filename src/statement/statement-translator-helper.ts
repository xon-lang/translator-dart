import {
  ExpressionStatementTree,
  IfStatementTree,
  ImportStatementTree,
  Issue,
  ParameterStatementTree,
  ReturnStatementTree,
  StatementTree,
} from '@xon/core';
import { AssignmentStatementTranslator } from './assignment/assignment-statement-translator';
import { ExpressionStatementTranslator } from './expression/expression-statement-translator';
import { IfStatementTranslator } from './if/if-statement-translator';
import { ImportStatementTranslator } from './import/import-statement-translator';
import { ReturnStatementTranslator } from './return/return-statement-translator';
import { StatementTranslator } from './statement-translator';

export function getStatementTranslator(tree: StatementTree): StatementTranslator {
  try {
    if (tree instanceof IfStatementTree) return new IfStatementTranslator(tree);
    if (tree instanceof ExpressionStatementTree) return new ExpressionStatementTranslator(tree);
    if (tree instanceof ImportStatementTree) return new ImportStatementTranslator(tree);
    if (tree instanceof ReturnStatementTree) return new ReturnStatementTranslator(tree);
    if (tree instanceof ParameterStatementTree) return new AssignmentStatementTranslator(tree);
    throw new Error(`Statement translator not found for '${tree.constructor.name}'`);
  } catch (error) {
    Issue.errorFromTree(tree, error.toString());
  }
}

export const getStatementTranslators = (trees: StatementTree[]): StatementTranslator[] => {
  return trees?.map(getStatementTranslator) || [];
};
