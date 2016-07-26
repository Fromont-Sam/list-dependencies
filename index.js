var readJson = require('read-package-json')

module.exports = function listDependencies(expr, callback) {
    readJson('package.json', console.error, false, function (er, data) {
      if (er) {
        console.error("There was an error reading the package.json file")
        return
      }
      var regexp = new RegExp(expr), deps = Object.keys(data.dependencies);
      var matchedDeps = deps.filter(function(dep) {
          return regexp.test(dep);
      });
      callback(matchedDeps);
    });
}
