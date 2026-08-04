// Immediately Invoked Function Expressions (IIFE)
// To prevent the pollution of global scope

(function coffee() {
  // Named IIFE
  console.log("DB CONNECTED");
})();

((name) => {
  // Unnamed IIFE
  console.log(`DB CONNECTED TWO ${name}`);
})("Kushal");

