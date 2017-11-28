module.exports = controller;
function controller(app, store) {
  app.get("/api/list", listRestaurants);
  function listRestaurants(req, res) {
    console.log(Date() + "\nGET /api/list");
    store.list(function(err, objects) {
      console.log(objects);
      if (err) {
        res.status(500).send({ error: err });
      } else {
        res.status(200).send(objects);
      }
    });
  }
}
