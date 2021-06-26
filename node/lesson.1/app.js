// const {var42, createUser, myFunc} = require('./dir/file');

// require('./dir/file');

// let userFunc = createUser('Andriy', 'andriy@gmail.com');
//
//
// console.log(userFunc);
//
// console.log(var42);
//
// myFunc();


// console.log('_________APP____________')
// console.log(__filename)
// console.log(__dirname)
// console.log('_________APP____________')

// // ************************************************************************************************************

// //    fs.writeFile - створює і перезаписує
// //    fs.appendFile - створює і дописує


// const fs = require('fs');

// const filePath = __dirname + '/dir/dog.txt';

// console.log(filePath);


// fs.writeFile(filePath, 'Hello boy', err => {
//     if (err){
//         console.log('__--__')
//         console.log(err)
//         console.log('__--__')
//     }
// })


// fs.appendFile(filePath, 'Hi boy \n', err => {
//     if (err){
//         console.log('--__--')
//         console.log(err)
//         console.log('--__--')
//     }
// })


// fs.readFile(filePath, (err, data) => {
//     if (err){
//         console.log('__--__--__');
//         console.log(err);
//         console.log('__--__--__');
//         return
//     }
//     console.log(data.toString());
// })


// fs.mkdir(`${__dirname}/movies/home`, {recursive: true}, (err) => {
//     console.log(err);
// })


// fs.readdir(`${__dirname}/movies/home`, (err, files) => {
//     if (err) {
//         console.log('_-_-_-_-_')
//         console.log(err)
//         console.log('_-_-_-_-_')
//         return
//     }
//
//     files.forEach(file => {
//         fs.stat(`${__dirname}/movies/home/${file}`, (statError, fileStats) => {
//             if (statError) {
//                 console.log('___---___')
//                 console.log(statError)
//                 console.log('___---___')
//                 return
//             }
//             console.log('*****************************')
//             console.log(file)
//             console.log(fileStats.isFile())
//             console.log(fileStats.size)
//             console.log(fileStats.isDirectory())
//             console.log('*****************************')
//         })
//     })
// })


// fs.rmdir(`${__dirname}/movies/home`, {recursive: true}, (err) => {
//     if (err) {
//         console.log('*************')
//         console.log(err)
//         console.log('*************')
//     }
// })


// const filePathToRemove = __dirname + '/dir/pp.php';

// fs.unlink(filePathToRemove, err => {
//     if (err) {
//         console.log('**************************')
//         console.log(err)
//         console.log('**************************')
//
//     }
// })


// const filePath1 = __dirname + '/dir/file.js';
// const filePath2 = __dirname + '/dir/fileCopy.js';
// const filePath3 = __dirname + '/dir/pp.php';
// const filePath4 = __dirname + '/movies/hello.world';


// fs.rename(filePath2, filePath4, err => {
//     if (err) {
//         console.log('*******************')
//         console.log(err)
//         console.log('*******************')
//     }
// })


// // *************************************************************************************************


// const path = require('path');
//
// let s = path.join(__dirname, 'movies', 'xxx', 'test', 'zz.mp4');
//
// let s1 = path.normalize('/hello/world/node/////j///\\\\\ass');
//
// // console.log(s);
// console.log(s1);


// // *****************************************************************************************************


const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'movies', 'feb', 'node.txt');

// let writeStream = fs.createWriteStream(filePath);
//
// for (let i = 0; i < 99999; i++) {
//     writeStream.write('TEST \n');
// }


// let readStream = fs.createReadStream(filePath);
//
//
// readStream.on('data', chunk => {
//     console.log('*******************************************')
//     console.log(chunk)
//     console.log('*******************************************')
// })
//
// readStream.on('end', () => {
//     console.log('Read is over')
// })


let readStream = fs.createReadStream(filePath);
let writeStream = fs.createWriteStream(path.join(__dirname, 'movies', 'feb', 'test.txt'));

// readStream.on('data', chunk => {
//     writeStream.write(chunk);
// })

readStream.pipe(writeStream);