function controller(app, store) {
  function listRestaurants(req, res) {
    console.log(`${Date()}\nGET /api/list`);
    store.list((err, objects) => {
      console.log(objects);
      if (err) {
        res.status(500).send({ error: err });
      } else {
        res.status(200).send(objects);
      }
    });
  }
  app.get("/api/list", listRestaurants);
}
module.exports = controller;
