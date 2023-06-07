const { isEmail } = require("validator");

const email = "test@test.com";
const wrongEmail = "abcDE123";

console.log(isEmail(email));
