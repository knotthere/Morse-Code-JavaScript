// Read the mapping originally from here:
// https://gist.github.com/mohayonao/094c71af14fe4791c5dd#file-morse-code-json
// and reformat it for use in:
// https://github.com/Filupnot/morse-code

const fs = require('fs');

// This sucks in the JSON formatted file as data, ready for use
var mc = require('./morse-code.json');

//console.log(mc);

// Now, iterate over each entty, and writeSync the C++ code we want
var strComment = "////////////////////////////////////////////////////////////////////////////////"

var writeOut = function(fd, str) {
    //console.log(strComment);
    fs.writeSync(fd, str);
    fs.writeSync(fd, "\n");
}

fs.open('./mappings.cpp', 'w+', (err, fd) => {
    writeOut(fd, strComment);
    for (var key in mc) {
        var str = "mapMorse2Char[\"" + mc[key] + "\"] = \"" + key.toUpperCase() + "\";";
        writeOut(fd, str);
    }

    writeOut(fd, strComment);
    // Let's make the reverse mapping'
    for (var key in mc) {
        var str = "mapChar2Morse[\"" + key.toUpperCase() + "\"] = \"" + mc[key] + "\";";
        writeOut(fd, str);
    }
});
