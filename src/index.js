async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
  return "async return";
}
async function async2() {
  console.log("async2");
}
console.log("start");
async1().then(function (message) {
  console.log(message);
});

new Promise(function (resolve) {
  console.log("promisel start");
  resolve();
  console.log("promise1 end");
}).then(function () {
  console.log("promise2");
});

setTimeout(function () {
  console.log("setTimeout");
}, 0);

console.log("end");
