const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');


const app = express();

app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({
    defaultLayout: false
}));

app.set('views', path.join(__dirname, 'static'));



app.use(express.json());


const users = [
    {name: 'Andriy', age: 37},
    {name: 'Olga', age: 38},
    {name: 'Roma', age: 21},
    {name: 'Viktor', age: 25}

]

app.get('/users', (req, res) => {
    res.render('users')
})



// app.get('/', (req, res) => {
//     // console.log(req);
//
//     // res.write('Hello world')
//     // res.end('Hello chat')
//     // res.send('HELLO')
//     // res.json('red 2+2')
// });
//
// app.get('/ping', (req, res) => {
//     res.end('pong')
// });
//
//
// app.post('/', (req, res) => {
//     console.log(req.body);
//     console.log(req.query);
//     console.log('_________________________________________')
//     res.json('POST')
// })
//
//
// app.get('/users', (req, res) => {
//     res.json(users);
// })
//
//
// app.get('/users/:userId', (req, res) => {
//     const {userId} = req.params;
//     res.json(users[userId]);
// })
//
//
// app.listen(3000, () => {
//     console.log('APP LISTEN 3000')
// });


// ------------- NOT GOOD -------------------
// GET /users/all
// GET /users/getOneById
// GET /users/singe
// PUT /users/updateUser
// DELETE /users/deleteUser/:id
// PATCH /users/blockUser/:id

// ---------------- GOOD -----------------------
// GET /users
// GET /users/:user_id
// GET /users?email=victor.fzs10
// PUT /users/:user_id
// DELETE /users/:user_id
// PATCH /users/block/:user_id
// PATCH /users/unblock/:user_id

