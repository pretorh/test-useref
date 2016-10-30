var useref = require("useref");
var fs = require("fs");
var userefImport = require("./useref-import");

var opts = {
    src: "./src/",
    dest: "./dist/"
};
opts.input = opts.src + "index.html";
opts.output = opts.dest + "index.html";

// read the source file
var source = fs.readFileSync(opts.input).toString();

// transform
var result = useref(source, userefImport(opts.src));

// output
if (!fs.existsSync(opts.dest)) {
    fs.mkdirSync(opts.dest);
}
fs.writeFileSync(opts.output, result[0]);
