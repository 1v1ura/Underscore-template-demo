const fs = require('fs');
const dummyjson = require('dummy-json');

function f() {
  const template = fs.readFileSync('templateJson.hbs', {encoding: 'utf8'});

  const myHelpers = {
    orientation: function() {
      return dummyjson.utils.randomArrayItem(['Front-end Engineer', 'Server-side Engineer', 'Director', 'Designer']);
    }
  };

  const result = dummyjson.parse(template, {helpers: myHelpers});

  fs.writeFile('./dummy.json', result, function (err) {
    if (err) {
      throw err;
    }
  });
}

f();

