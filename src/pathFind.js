//     Declare this function with the `function` keyword (otherwise the tests cannot check if your function is recursive later)
// 1.  The function will be called with two parameters: `pathFind(path, object)`.
//     The path is an array of strings and the object is an object.
//     The array of strings refer to a sequence of properties on the object.
//     Here are some examples of how it should work:
//     ```js
    // pathFind(["foo"], { foo: "bar" }) // === "bar"
    // pathFind(["name"], { name: "Dave" }) // === "Dave"
    // pathFind(["author", "name"], { author: { name: "Stephen" } }) // === "Stephen"
    // pathFind(["book", "author", "name"], {
    //   book: {
    //     author: {
    //       name: "Yuval"
    //     }
    //   }
    // }) // === "Yuval"
//     ```
// 1.  The function should be a pure function, neither of the inputs should be mutated.
// 1.  The function should be recursive. If you don't manage making it recursive, it's more important that it returns the expected outputs.

// (path = array of strings -- refers to a sequence of property on the object)
// (object = is an object)

// should return the property from an object (---- working ---)
// should return the property of a nested object ( --- not working --- couldn't manage both yet -- KEEP TRYING!)
// (recursion? not yet! but I am trying to solve anyway)

function pathFind(path, object) {
  for(i = 0; i <= path.length; i++) {
    return object[path[i]];
  }
}



module.exports = { pathFind }
