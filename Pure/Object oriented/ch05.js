const control = {
  sum: (a, b) => (a + b),
  sub: (a, b) => (a - b),
  pi: () => (Math.PI),
  random: () => (Math.random()),
};

console.log('sum:', control.sum(3, 6));
console.log('sub:', control.sub(6, 3));
console.log('pi:', control.pi());
console.log('random:', control.random());
