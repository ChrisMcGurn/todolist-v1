
// Add getDate property to the module object and set it's value to the getDate() function
module.exports.getDate = function () {

  const today = new Date();

  const options = {
    weekday: "long",
    month: "long",
    day: "numeric"
  };

  return today.toLocaleDateString("en-UK", options);

}

// Add getDay property to the module object and set it's value to the getDate() function
// exports.  is a shorter way of writing module.exports
exports.getDay = function () {

  const today = new Date();

  const options = {
    weekday: "long"
  };

  return today.toLocaleDateString("en-UK", options);

}