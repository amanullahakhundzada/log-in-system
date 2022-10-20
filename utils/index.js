/**
 *
 * @param {string} csvStr
 * Returns a csv string parsed to JSON
 */
const csvToJSON = (csvStr) => {
  // needs carriage return on windows
  let table = csvStr.split(/\n|\r\n/).map((row) => row.split(","));
  let header = table[0];
  return table.slice(1).map((row) => {
    let record = {};
    row.forEach((value, idx) => {
      record[header[idx]] = value;
    });
    return record
  });
};

module.exports = {
    csvToJSON
}
