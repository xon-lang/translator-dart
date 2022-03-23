import { MultipleBodyTree, String } from '@xon/core';
import { getStatementTranslators } from '../../statement/statement-translator-helper';
import { BodyTranslator } from '../body-translator';

export class MultipleBodyTranslator implements BodyTranslator {
  constructor(private tree: MultipleBodyTree) {}

  toString(): String {
    const statements = getStatementTranslators(this.tree.statements);
    return statements.join('\n');
  }
}
