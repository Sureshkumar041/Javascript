function sum(...args) {
  // Your implementation
  let total = 0;

  for (var i = 0; i < args.length; i++) {
    total = total + args?.[i];
  }

  return total;
}

//For the purpose of user debugging.
console.log(sum(100, 200, 300, 400));
