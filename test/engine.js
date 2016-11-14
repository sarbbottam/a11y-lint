const assert = require('assert');
const jsdom = require('jsdom').jsdom;

describe('Engine', () => {
  describe('engine.lint()', () => {
    const Engine = require('../src/engine');
    const engine = new Engine({});
    const markup = `
    <html>
      <body>
        <div>
          <span data-foo="foo">foo</span>
        </div>
      </body>
    </html>
    `;
    const doc = jsdom(markup).documentElement;

    it('should pass the foo check and fail for bar', done => {
      const context = doc.querySelector('span');
      const reporter = function (result) {
        assert.deepEqual(result, ['foo passed', 'bar failed']);
        done();
      };
      engine.lint({context, reporter});
    });
  });
});
