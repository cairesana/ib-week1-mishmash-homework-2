// 1.  The function will be called with two parameters: `pathFind(path, object)`.

//     Here are some examples of how it should work: (see readme)

// 1.  The function should be a pure function, neither of the inputs should be mutated.
// 1.  The function should be recursive. If you don't manage making it recursive, it's more important that it returns the expected outputs.

// should return the property from an object (---- working ---)
// should return the property of a nested object ( --- not working --- )
// (it got more confused when attempting recursion .. so, I tryed to solve without it)

function pathFind(path, object) {
  for(i = 0; i <= path.length; i++) {
    //if (typeof(object[path[i]]) == "object") {
        // coundn't get to work the nested object - I got confused
        // return ...
    //} else {
      return object[path[i]];
    //}
  }
}

// const obj = {
//     foo1: {
//         foo2: {
//             bar: "Some value"
//         }
//     }
//   }
//   pathFind(["foo1", "foo2", "bar"], obj);


module.exports = { pathFind }
