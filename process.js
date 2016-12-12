// Read the mapping originally from here:
// https://gist.github.com/mohayonao/094c71af14fe4791c5dd#file-morse-code-json
// and reformat it for use in:
// https://github.com/Filupnot/morse-code

// This sucks in the JSON formatted file as data, ready for use
var mc = require('./morse-code.json');

//console.log(mc);

// Now, iterate over each entty, and write the C++ code we want
var strComment = "////////////////////////////////////////////////////////////////////////////////"

console.log(strComment);
for (var key in mc) {
    // console.log(key, mc[key]);
    var str = "mapMorse2Char[\"" + mc[key] + "\"] = \"" + key.toUpperCase() + "\";";
    console.log(str);
}

console.log(strComment);
// Let's make the reverse mapping'
for (var key in mc) {
    // console.log(key, mc[key]);
    var str = "mapChar2Morse[\"" + key.toUpperCase() + "\"] = \"" + mc[key] + "\";";
    console.log(str);
}
console.log(strComment);
