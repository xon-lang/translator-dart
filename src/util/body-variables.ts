import {
  ForStatementTree,
  IdExpressionTree,
  IfStatementTree,
  MultipleBodyTree,
  ParameterStatementTree,
  StatementTree,
} from '@xon/core';

// todo remove and fix with using metadata
export const getVariables = (statements: StatementTree[], vars: String[] = []): String[] => {
  const getIfStatements = (statement: IfStatementTree) => {
    const statements = [];
    if (statement.thenBody instanceof MultipleBodyTree) {
      statements.push(...statement.thenBody.statements);
    }
    if (statement.elseBody && statement.elseBody instanceof MultipleBodyTree) {
      statements.push(...statement.elseBody.statements);
    }
    return statements;
  };

  const getForStatements = (statement: ForStatementTree) => {
    if (statement.body instanceof MultipleBodyTree) {
      return statement.body.statements;
    }
    return [];
  };

  for (const statement of statements) {
    if (
      statement instanceof ParameterStatementTree &&
      statement.parameter.variable instanceof IdExpressionTree
    ) {
      vars.push(statement.parameter.variable.name.text);
    }

    if (statement instanceof IfStatementTree) {
      getVariables(getIfStatements(statement), vars);
    }

    if (statement instanceof ForStatementTree) {
      getVariables(getForStatements(statement), vars);
    }
  }
  return [...new Set(vars)];
};
