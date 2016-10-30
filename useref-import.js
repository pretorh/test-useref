var fs = require("fs");
var path = require("path");

module.exports = function(dir) {
    return {
        import: function(c, target) {
            var file = path.join(dir, target);
            return fs.readFileSync(file).toString();
        }
    };
};
