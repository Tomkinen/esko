module.exports = controller;
function controller(store, schedule, random) {
  selectLunch();
  const runThisEveryWorkDayAt1AM = schedule.scheduleJob("00 01 * * 1-5", selectLunch);
  function selectLunch() {
    store.list(function(err, objects) {
      let selectedObject = random.integer(0, objects.length - 1);
      if (objects.length < 6) {
        console.log(Date() + "\nError: Must have over 5 lunch places in /store. Please add more restaurants.");
        return;
      }
      let object = objects[selectedObject];
      let maxObject = Math.max.apply(Math,objects.map(function(o){return o.orderNumber;}));
      if (object.orderNumber < maxObject-4 || object.orderNumber == 0) {
        object.orderNumber = maxObject + 1;
        store.add(object, function (err) {
          if (err) {
            console.log(Date() + "\nError:" + err);
          } else {
            console.log(Date() + "\nEsko Lunch Decision Support Selected Lunch:");
            console.log(object);
          }
        });
      }
      else {
        selectLunch();
      }
    });
  }
}
