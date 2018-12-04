!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)}(function(t){"use strict";t.defineMode("sparql",function(t){function e(t){return new RegExp("^(?:"+t.join("|")+")$","i")}function n(t,e){var n=t.next();if(a=null,"$"==n||"?"==n)return"?"==n&&t.match(/\s/,!1)?"operator":(t.match(/^[\w\d]*/),"variable-2");if("<"!=n||t.match(/^[\s\u00a0=]/,!1)){if('"'==n||"'"==n)return e.tokenize=r(n),e.tokenize(t,e);if(/[{}\(\),\.;\[\]]/.test(n))return a=n,"bracket";if("#"==n)return t.skipToEnd(),"comment";if(l.test(n))return t.eatWhile(l),"operator";if(":"==n)return t.eatWhile(/[\w\d\._\-]/),"atom";if("@"==n)return t.eatWhile(/[a-z\d\-]/i),"meta";if(t.eatWhile(/[_\w\d]/),t.eat(":"))return t.eatWhile(/[\w\d_\-]/),"atom";var i=t.current();return s.test(i)?"builtin":u.test(i)?"keyword":"variable"}return t.match(/^[^\s\u00a0>]*>?/),"atom"}function r(t){return function(e,r){for(var i,o=!1;null!=(i=e.next());){if(i==t&&!o){r.tokenize=n;break}o=!o&&"\\"==i}return"string"}}function i(t,e,n){t.context={prev:t.context,indent:t.indent,col:n,type:e}}function o(t){t.indent=t.context.indent,t.context=t.context.prev}var a,c=t.indentUnit,s=e(["str","lang","langmatches","datatype","bound","sameterm","isiri","isuri","iri","uri","bnode","count","sum","min","max","avg","sample","group_concat","rand","abs","ceil","floor","round","concat","substr","strlen","replace","ucase","lcase","encode_for_uri","contains","strstarts","strends","strbefore","strafter","year","month","day","hours","minutes","seconds","timezone","tz","now","uuid","struuid","md5","sha1","sha256","sha384","sha512","coalesce","if","strlang","strdt","isnumeric","regex","exists","isblank","isliteral","a"]),u=e(["base","prefix","select","distinct","reduced","construct","describe","ask","from","named","where","order","limit","offset","filter","optional","graph","by","asc","desc","as","having","undef","values","group","minus","in","not","service","silent","using","insert","delete","union","true","false","with","data","copy","to","move","add","create","drop","clear","load"]),l=/[*+\-<>=&|\^\/!\?]/;return{startState:function(){return{tokenize:n,context:null,indent:0,col:0}},token:function(t,e){if(t.sol()&&(e.context&&null==e.context.align&&(e.context.align=!1),e.indent=t.indentation()),t.eatSpace())return null;var n=e.tokenize(t,e);if("comment"!=n&&e.context&&null==e.context.align&&"pattern"!=e.context.type&&(e.context.align=!0),"("==a)i(e,")",t.column());else if("["==a)i(e,"]",t.column());else if("{"==a)i(e,"}",t.column());else if(/[\]\}\)]/.test(a)){for(;e.context&&"pattern"==e.context.type;)o(e);e.context&&a==e.context.type&&o(e)}else"."==a&&e.context&&"pattern"==e.context.type?o(e):/atom|string|variable/.test(n)&&e.context&&(/[\}\]]/.test(e.context.type)?i(e,"pattern",t.column()):"pattern"!=e.context.type||e.context.align||(e.context.align=!0,e.context.col=t.column()));return n},indent:function(t,e){var n=e&&e.charAt(0),r=t.context;if(/[\]\}]/.test(n))for(;r&&"pattern"==r.type;)r=r.prev;var i=r&&n==r.type;return r?"pattern"==r.type?r.col:r.align?r.col+(i?0:1):r.indent+(i?0:c):0}}}),t.defineMIME("application/sparql-query","sparql")});