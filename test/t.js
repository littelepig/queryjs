
var t = require('../index.js');


var testStr = require('fs').readFileSync('./simple.js').toString();


var root = t.transfer(testStr);

console.log(root.stringify());
root.find('FunctionDeclaration','aa').append('var haha = "mypsdsdfsdf";');
root.find('FunctionDeclaration','aa').getParam(1).replaceWith('my');
root.find('FunctionDeclaration','aa').find('ObjectExpression','test').add('test','"hahaha"');
b = root.find('FunctionDeclaration','aa').find('ObjectExpression','test').get('m');
b.replaceWith('"aa"');
console.log(root.stringify());