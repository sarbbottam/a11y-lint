const DEFAULT_RULES = require('./rules');
const DEFAULT_REPORTER = require('./reporter');
const DEFAULT_CONFIG = require('./config');

const DEFAULT_LOCALE = 'en-US';

class Engine {
  constructor({
      rules = DEFAULT_RULES,
      reporter = DEFAULT_REPORTER,
      config = DEFAULT_CONFIG,
      locale = DEFAULT_LOCALE
    } = {}) {
    this.rules = rules(locale);
    this.reporter = reporter;
    this.config = config;
    this.result = null;
  }

  lint({
    context = document.documentElement,
    reporter = DEFAULT_REPORTER // reporter is a callback function
  } = {}) {
    if (!context) {
      throw (new Error('context or root node is mandatory to excute the rules'));
    }
    const rules = this.rules;
    const result = [];
    const config = this.config;
    // this is just for the sake of demo
    // it needs to traverse the subtree recursivly to lint all its decendents
    // also the it should perform the operation asynchronously.
    Object.keys(config).forEach(rule => {
      if (config[rule]) {
        result.push(rules[rule].run(context));
      }
    });
    this.result = result;
    reporter(result);
  }
}

module.exports = Engine;
