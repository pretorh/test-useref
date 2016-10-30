var useref = require("useref");
var fs = require("fs");

var opts = {
    src: "./src/",
    dest: "./dist/"
};
opts.input = opts.src + "index.html";
opts.output = opts.dest + "index.html";

// read the source file
var source = fs.readFileSync(opts.input).toString();

// transform
var result = useref(source, {
    import: function(c, target) {
        return fs.readFileSync(opts.src + target).toString();
    }
});

// output
if (!fs.existsSync(opts.dest)) {
    fs.mkdirSync(opts.dest);
}
fs.writeFileSync(opts.output, result[0]);
