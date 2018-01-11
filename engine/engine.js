function controller(store, schedule, random) {
  function selectLunch() {
    store.list((err, objects) => {
      const selectedObject = random.integer(0, objects.length - 1);
      if (objects.length < 6) {
        console.log(
          `${Date()}\nError: Must have over 5 lunch places in /store.
          Please add more restaurants.`
        );
        return;
      }
      const object = objects[selectedObject];
      const maxObject = Math.max(...objects.map(o => o.orderNumber));
      if (object.orderNumber < maxObject - 4 || object.orderNumber === 0) {
        object.orderNumber = maxObject + 1;
        store.add(object, errObject => {
          if (errObject) {
            console.log(`${Date()}\nError:${errObject}`);
          } else {
            console.log(
              `${Date()}\nEsko Lunch Decision Support Selected Lunch:`
            );
            console.log(object);
          }
        });
      } else {
        selectLunch();
      }
    });
  }
  selectLunch();
  schedule.scheduleJob("00 01 * * 1-5", selectLunch);
}
module.exports = controller;
