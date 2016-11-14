function reporter(result) {
  console.log(
    JSON.stringify(result, null, 2)
  );
}

module.exports = reporter;
