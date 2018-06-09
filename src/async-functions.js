// 1. The function `giveItBackLater` will be called with two parameters: giveItBackLater(value, callback) (---DONE!---)

//    The `callback` function should be called and given the `value` as a parameter.
//        It should NOT do this right away, but later (asynchronously) using `setTimeout`. (---DONE!---)

// 1. The function `promiseToGiveItBackLater(value)` should return a promise that will resolve with
//    the `value` later. It should use the same function you defined in `giveItBackLater`.
//    That means you will wrap your callback-style function with a promise-style version.

// 1. When the code `const outputPromise = addSomePromises(somePromise)` is executed, your function should return a new promise that has both a fulfillment handler and a rejection handler.
//
//      - When `somePromise` resolves with a string `"foo"`, the `outputPromise` should resolve with a string `"foofoo"`.
//      - When `somePromise` is rejected with the value `"bar"`, the `outputPromise`  should resolve with `"barbarbar"`.
//
//    So, your fulfillment handler should double the string and the rejection handler should triple the string.


function giveItBackLater(value, callback) {
  function complete() {
    callback(value);
  }
  setTimeout(complete, 1000)
}


function addSomePromises() {

}

function promiseToGiveItBackLater(value) {

}



module.exports = {
  giveItBackLater,
  addSomePromises,
  promiseToGiveItBackLater
}
