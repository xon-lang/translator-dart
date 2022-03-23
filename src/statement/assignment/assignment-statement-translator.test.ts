import { parseStatement } from '@xon/core';
import { getStatementTranslator } from '../statement-translator-helper';
import { AssignmentStatementTranslator } from './assignment-statement-translator';

test('return value', () => {
  const code = 'a = 123';
  const tree = parseStatement(code);
  const translator = getStatementTranslator(tree);

  expect(translator).toBeInstanceOf(AssignmentStatementTranslator);
  expect(translator.toString()).toBe('a = 123');
});
