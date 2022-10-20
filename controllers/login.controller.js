const { readFile, readFileSync } = require("fs");
const { join } = require("path");
const utils = require("../utils");

/**
 *
 * @param {string} username
 * @param {string} password
 * Returns the user's name and username that is authenticated. If invalid credentials, returns null.
 */
const validateCredentials = (username, password) => {
  let contents = readFileSync(join(__dirname, "../data/logindata.csv"));
  let contentsJSON = utils.csvToJSON(contents.toString());
  let authenticatedUser = contentsJSON.find(
    (user) => user.Username == username && user.Password == password
  );

  console.log(authenticatedUser);

  return (
    authenticatedUser && {
      id: authenticatedUser.Id,
      name: authenticatedUser.Name,
      username: authenticatedUser.Username,
      authStatus: "tempValueAuthenticated",
    }
  );
};

module.exports = validateCredentials;
