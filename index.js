const { newConsulStore } = require("./storage-consul");
module.exports = {
  ConsulStorage: newConsulStore,
};