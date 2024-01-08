const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');


const app = express();

app.use(cors());
app.use(bodyparser.json());




// Database Connection

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crudapp',
    port: '3306'
})


// Checking Connection

db.connect(err => {
    if (err) {
        console.log(err + " <= " + 'Having error in db connection..');
    }
    console.log('Database is Connected...');
})


// Getting Data From Database

app.get('/user', (req, res) => {

    let qr = `select * from user`;

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'err')
        }
        if (result.length > 0) {
            res.send({
                message: 'all user data',
                data: result
            })
        }
    })
})

// Get Single Data

app.get('/user/:id', (req, res) => {

    let getID = req.params.id;
    let qr = `select * from user where id = ${getID}`

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'Error in getting single user');
        }
        if (result.length > 0) {
            res.send({
                message: 'Got the single user',
                data: result
            })
        }
        else {
            res.send({
                message: 'User does not exist'
            })
        }
    })

})

// Post Data & Create User

app.post('/user', (req, res) => {

    // console.log(req.body, 'creating body data');

    let uID = req.body.id;
    let fullName = req.body.fullname;
    let eMail = req.body.email;
    let mb = req.body.mobile;

    let qr = `insert into user(id, fullname, email, mobile) 
                values('${uID}','${fullName}', '${eMail}', '${mb}')`;
                
    db.query(qr, (err, result) => {

        if (err) {
            console.log(err)
        }
        res.send({
            message: 'user created'
        })
    })
})




// Put Data

app.put('/user/:id', (req, res) => {

    let getID = req.params.id

    let fullName = req.body.fullname;
    let eMail = req.body.email;
    let mb = req.body.mobile;

    let qr = `update user set fullname = '${fullName}', email = '${eMail}', mobile = '${mb}'
                where id = ${getID}`;

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send({
            message: 'user updated'
        })

    })
})



// Delete Data

app.delete('/user/:id', (req, res) => {

    let getID = req.params.id

    let qr = `delete from user where id = '${getID}'`;

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send({
            message: 'user deleted'
        })

    })
})








// Port Listening

app.listen(6900, () => {
    console.log("Hello! Server is Running....")
})