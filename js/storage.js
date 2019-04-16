const storage = require("electron-json-storage");

function setDataToFile(data, name = "hydrationstation") {
  // data must be a JSON object

  storage.set(name, data, function(error) {
    if (error) throw error;
  });
}

function getDataFromFile(callback, name = "hydrationstation") {
  storage.get(name, function(error, data) {
    if (error) throw error;
    callback(data);
  });
}

module.exports = {
  setDataToFile,
  getDataFromFile
};
