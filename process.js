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

fs.open('./mappings.cpp', 'w+', (err, fd) => {
    //console.log(strComment);
    fs.writeSync(fd, strComment);
    fs.writeSync(fd, "\n");
    for (var key in mc) {
        // console.log(key, mc[key]);
        var str = "mapMorse2Char[\"" + mc[key] + "\"] = \"" + key.toUpperCase() + "\";";
        //console.log(str);
        fs.writeSync(fd, str);
        fs.writeSync(fd, "\n");
    }

    fs.writeSync(fd, strComment);
    fs.writeSync(fd, "\n");
    //console.log(strComment);
    // Let's make the reverse mapping'
    for (var key in mc) {
        // console.log(key, mc[key]);
        var str = "mapChar2Morse[\"" + key.toUpperCase() + "\"] = \"" + mc[key] + "\";";
        //console.log(str);
        fs.writeSync(fd, str);
        fs.writeSync(fd, "\n");
  }
    fs.writeSync(fd, strComment);
    fs.writeSync(fd, "\n");
    //console.log(strComment);
});
