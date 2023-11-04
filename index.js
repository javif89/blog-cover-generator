var Jimp = require("jimp");

function slug(str) {
    return str.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}

function makeCover(title) {
    Jimp.read("storage/template.png", (err, templ) => {
        if (err) throw err;
        Jimp.loadFont("storage/NRmrahIZjvJ25wUzVU4F00WQ.ttf.fnt").then((font) => {
            templ.print(font, 63, 188, title, 545)
            templ.write(`storage/build/${slug(title)}.png`)
        });
    });
}

// Get the first argument to the program and use it as the title
let title = process.argv[2]