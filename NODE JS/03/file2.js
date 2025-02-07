// The File System

const fs = require('fs');

// writing files
fs.writeFile('/Users/winson/Desktop/PROCOD-11/NODE JS/03/blog.txt', 'hello, world', () => {
    console.log('file was written');
});

fs.writeFile('/Users/winson/Desktop/PROCOD-11/NODE JS/03/blog2.txt', 'hello, again', () => {
    console.log('file was written');
});


//reading files
fs.readFile('/Users/winson/Desktop/PROCOD-11/NODE JS/03/blog.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});


// creating directory
if(!fs.existsSync('/Users/winson/Desktop/PROCOD-11/NODE JS/03/assets')){

    fs.mkdir('/Users/winson/Desktop/PROCOD-11/NODE JS/03/assets', err => {
        if(err) {
            console.log(err);
        }
    });
}

// deleting directory
else{
    fs.rmdir('/Users/winson/Desktop/PROCOD-11/NODE JS/03/assets', err => {
        if(err) {
            console.log(err);
        }
    });
}

// deleting files 
if (fs.existsSync('/Users/winson/Desktop/PROCOD-11/NODE JS/03/deleteme.txt')) {
    fs.unlink('/Users/winson/Desktop/PROCOD-11/NODE JS/03/deleteme.txt', err => {
        if(err) {
            console.log(err);
        }
        console.log('file deleted');
    })
};