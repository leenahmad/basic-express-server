"use strict";

module.exports = (req, res, next) => {

  const query = req.query;
  const name = query.name;

  let regex = /^[a-zA-Z- ]+$/g

  if (regex.test(name)) {
    next();
  } else {
    next(" error");
  }



  
//   if (name) {
//     next();
//   } else {
//     next("500 / error");
//   }
};
