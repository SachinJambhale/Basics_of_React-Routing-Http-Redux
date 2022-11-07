const bcrypt = require("bcrypt");

function encrypt(text) {
  if (!text) return;
  try {
    bcrypt.hashSync(text, salt);
  } catch (e) {
    console.log(e);
  }
}


function compare(text, hash) {
  try {
    return bcrypt.compareSync(text, hash);
  } catch (e) {
    console.log(e);
  }
  return false;
}


module.exports = { encrypt, compare };