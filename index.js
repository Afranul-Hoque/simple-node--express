const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

app.use(express.json())
// const handler = (req, res) => {
//     res.send('Hello World!');
// }
// app.get('/', handler);






// create new api
const users = [
    { id: 1, name: "katrina", movie: "ak the tiger", income: "300cr" },
    { id: 2, name: "karina", movie: "raone", income: "200cr" },
    { id: 3, name: "anuska", movie: "PK", income: "400cr" },
    { id: 4, name: "anuska shetty", movie: "bahubali", income: "700cr" },
    { id: 5, name: "prity zinta", movie: "koi mil giea", income: "100cr" },
    { id: 6, name: "kajol", movie: "kuch kuch hote hai", income: "350cr" },
]

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

app.get('/fruits/mango', (req, res) => {
    res.send("am khamu sob khamu tre dimu na")
})


app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('bujiear na', req.body)
    res.json(newUser);
})


// using search query

// app.get('/users', (req, res) => {
//     const search = (req.query.search);
//     if (search) {
//         const searchresult = users.filter(user => user.name.toLowerCase().includes(search))
//         res.send(searchresult)
//     }
//     else {
//         res.send(users)
//     }
//     // console.log(value)
// })


app.get('/users', (req, res) => {
    const search = (req.query.search);
    if (search) {
        const searchresults = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(searchresults)
    }
    else {
        res.send(users)
    }
})

app.get('/', (req, res) => {
    res.send('Hello bro tore cai re ami, valobasi bole ami manbo sob ?');
})
app.listen(port, () => {
    console.log('hi bro', port)
})