const i18n = require('./i18n');
const foo = require('./foo');
const bar = require('./bar');

function getRules(locale) {
  const strings = i18n(locale);
  return {
    foo: foo(strings),
    bar: bar(strings)
  };
}

module.exports = getRules;
