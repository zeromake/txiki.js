import assert from 'tjs:assert';


/* Run a program that is expected to exit 0 */
tjs.exec([ tjs.exepath, '-v' ]);
assert.fail('Should not be reached');
