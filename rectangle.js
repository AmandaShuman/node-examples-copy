export const rectangle = (x, y, callback) => {
  //be sure to use this pattern as it is expected for node developers
  //first check for errors
  if (x <= 0 || y <= 0) {
    //callback will be written in app.js - write the error first 
    callback(new Error(`Rectangle dimensions must be greater than or equal to zero. Received: ${x}, ${y}`));
  } else {
    //won't run callback right away in case asynch. decision needs to be made
    setTimeout(() =>
      //no error message for first argument so pass in null
      callback(null, {
        //don't need to pass in x and y here because they are available from the outer function
        perimeter: () => 2 * (x + y),
        area: () => x * y
      }),
      2000
    );
  }
};