function bar(strings) {
  return {
    run(context) {
      if (context && context.getAttribute('data-bar')) {
        return strings.BAR_PASS;
      }
      return strings.BAR_FAIL;
    }
  };
}

module.exports = bar;
