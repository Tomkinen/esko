function controller(app, store) {
  function deleteRestaurant(req, res) {
    console.log(`${Date()}\nPOST /api/delete:`);
    console.log(req.body);
    store.remove(req.body.id, err => {
      if (err) {
        res.status(500).send({ error: err });
      } else {
        res.status(200).send({ delete: true });
      }
    });
  }
  app.post("/api/delete", deleteRestaurant);
}
module.exports = controller;
