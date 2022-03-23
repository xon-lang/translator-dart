import { SingleBodyTree, String } from '@xon/core';
import { getStatementTranslator } from '../../statement/statement-translator-helper';
import { BodyTranslator } from '../body-translator';

export class SingleBodyTranslator implements BodyTranslator {
  constructor(private tree: SingleBodyTree) {}

  toString(): String {
    return getStatementTranslator(this.tree.statement).toString();
  }
}
