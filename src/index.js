import { createRequire } from 'node:module';
import { sleep } from './async-utils.js';

const require = createRequire(import.meta.url);
const { add } = require('./legacy.cjs');

console.log('start');
await sleep(100); // top-level await, only legal in ESM
console.log('done after 100ms');
console.log('CJS add from ESM:', add(2, 3));