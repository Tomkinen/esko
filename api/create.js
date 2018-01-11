function controller(app, store) {
  function createRestaurant(req, res) {
    console.log(`${Date()}\nPOST /api/create:`);
    console.log(req.body);
    store.add(req.body, err => {
      if (err) {
        res.status(500).send({ error: err });
      } else {
        res.status(200).send({ create: true });
      }
    });
  }
  app.post("/api/create", createRestaurant);
}
module.exports = controller;
