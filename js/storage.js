const storage = require("electron-json-storage");

function setDataToFile(data) {
  // data must be a JSON object

  storage.set("hydrationstation", data, function(error) {
    if (error) throw error;
  });
}

function getDataFromFile(callback) {
  storage.get("hydrationstation", function(error, data) {
    if (error) throw error;
    callback(data);
  });
}

module.exports = {
  setDataToFile,
  getDataFromFile
};
