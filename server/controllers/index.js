//const Home = require('../db/index');

module.exports = {
  homeIndex: async (req, res) => {
    res.send("Hello from our server!");
  }, 

  //homeNew: async function (res) {
  //  res.render("./not-public/home/new");
  //}
};