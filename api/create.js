module.exports = controller;
function controller(app, store) {
  app.post("/api/create", createRestaurant);
  function createRestaurant(req, res) {
    console.log(Date() + "\nPOST /api/create:");
    console.log(req.body);
    store.add(req.body, function(err) {
      if (err) {
        res.status(500).send({ error: err });
      } else {
        res.status(200).send({ create: true });
      }
    });
  }
}
