import selfDocumenting from './modules/test.js';
import { other } from './modules/other.js';

var defaultOutput = selfDocumenting('the input');
var output = other();

console.log(defaultOutput);
console.log(output);
