function foo(strings) {
  return {
    run(context) {
      if (context && context.getAttribute('data-foo')) {
        return strings.FOO_PASS;
      }
      return strings.FOO_FAIL;
    }
  };
}

module.exports = foo;
