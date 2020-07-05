const getNanoSecondsElapsedDuringFunction = functionToTime => {
  const start = process.hrtime.bigint();
  functionToTime();
  return process.hrtime.bigint() - start;
};

module.exports = { getNanoSecondsElapsedDuringFunction };