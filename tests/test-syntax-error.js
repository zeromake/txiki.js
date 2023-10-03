import assert from 'tjs:assert';
import path from 'tjs:path';


const args = [
    tjs.exepath,
    'run',
    path.join(import.meta.dirname, 'helpers', 'syntax-error.js')
];
const proc = tjs.spawn(args, { stdout: 'pipe', stderr: 'ignore' });
const buf = new Uint8Array(4096);
const nread = await proc.stdout.read(buf);
const stderrStr = new TextDecoder().decode(buf.subarray(0, nread));
const status = await proc.wait();
assert.ok(stderrStr.match(/SyntaxError/) !== null, 'dumps to stderr');
assert.ok(status.exit_status === 1 && status.term_signal === null, 'succeeded');
