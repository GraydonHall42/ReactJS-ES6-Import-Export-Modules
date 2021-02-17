const pi = 3.14159265;
const quadPi = 3.14159265 * 4;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

//can only have a single default export
export default pi;

//all the rest of our exports.
export { doublePi, triplePi, quadPi };
