import { ImportStatementTree, String } from '@xon/core';
import {
  getExpressionTranslator,
  getExpressionTranslators,
} from '../../expression/expression-translator-helper';
import { StatementTranslator } from '../statement-translator';

export class ImportStatementTranslator implements StatementTranslator {
  constructor(private tree: ImportStatementTree) {}

  toString(): String {
    const path = getExpressionTranslator(this.tree.path, false);
    const members = getExpressionTranslators(this.tree.members, false);
    return `import { ${members.join(', ')} } from ${path}`;
  }
}
