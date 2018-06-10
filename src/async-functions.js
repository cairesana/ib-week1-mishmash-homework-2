// 1. The function `giveItBackLater` will be called with two parameters: giveItBackLater(value, callback) (---DONE!---)

//    The `callback` function should be called and given the `value` as a parameter.
//        It should NOT do this right away, but later (asynchronously) using `setTimeout`. (---DONE!---)

// 1. The function `promiseToGiveItBackLater(value)` should return a promise that will resolve with
//    the `value` later. It should use the same function you defined in `giveItBackLater`.
//    That means you will wrap your callback-style function with a promise-style version. (---DOOOOOONE!!!)

 // ---- <<<< keep working >> -----

// 1. When the code `const outputPromise = addSomePromises(somePromise)` is executed,
//    your function should return a new promise that has both a fulfillment handler and a rejection handler.
//
//      - When `somePromise` resolves with a string `"foo"`, the `outputPromise` should resolve with
//                                                                                      a string `"foofoo"`.
//      - When `somePromise` is rejected with the value `"bar"`, the `outputPromise`  should resolve
//                                                                                      with `"barbarbar"`.
//
//    So, your fulfillment handler should double the string and the rejection handler should triple the string.


function giveItBackLater(value, callback) {
  function complete() {
    callback(value);
  }
  setTimeout(complete, 1000)
}

const promiseToGiveItBackLater = (value) => {
  return new Promise((resolve) => {
    giveItBackLater(value, resolve)             // wraping callback function in promise-style O.o
  })
}

function addSomePromises() {
  //return somePromise.then(...???) - I got lost with the instructions for this one O.o
}


module.exports = {
  giveItBackLater,
  addSomePromises,
  promiseToGiveItBackLater
}
