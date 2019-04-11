var fs = require('fs');
var turf = require('@turf/turf');

module.exports = function (file) {

  var obj = JSON.parse(fs.readFileSync(file).toString());

  var a;
  var b;
  for (var i = 0; i < obj.features.length; i++) {
    a = obj.features[i].geometry.coordinates[0];
    b = obj.features[i].geometry.coordinates[1];
    obj.features[i].properties.x_field = a;
    obj.features[i].properties.y_field = b;
  }

  // fs.writeFile(JSON.stringify(obj));
  console.log(JSON.stringify(obj));

};