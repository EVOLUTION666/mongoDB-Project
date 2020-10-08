const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB has started...'))
    .catch(e => console.log(e))

require('./person.model')

const Person = mongoose.model('persons')

const person = new Person({
    std_id: 1,
    std_fullname: "Nefedov Andrey Alexeevich",
    std_login: "nefedov01",
    std_pswd: "123592"
})


// ----------------------SHOW ALL RECORDS--------------------
Person.find({}).then(persons => {
    console.log(JSON.stringify(persons, null ,2))
})

// --------------------ADD METHOD---------------------------
// [
//     {std_id: 2, std_fullname: "Gorelkin Alex Sergeevich", std_login: "gorelkin02", std_pswd: "12345" },
//     {std_id: 3, std_fullname: "Osadchuk Georgiy Miroslavovich", std_login: "osadchuk03", std_pswd: "5678" },
//     {std_id: 4, std_fullname: "Shekurov Leonid Vladimirovich", std_login: "shekurov04", std_pswd: "34562" }
// ].forEach(p => {
//     new Person(p).save()
// })

// -------------------UPDATE METHOD-------------------------

// Person.replaceOne({std_id: 3}, {$set: {std_id: 3, std_fullname: "Shekurov Leonid Vladimirovich", std_login: "shekurov04", std_pswd: "34562" }})

// ---------------REMOVE METHOD----------------------------
// Person.find({std_id: 4}).remove().then(() => console.log('Person has been removed!'))

// Person
//     .find({std_id: 1})
//     .limit(2)
//     .then(persons => {
//     console.log(persons)
//     const p = persons[0]

//     Person.find({_id: p.id}).remove().then(() => console.log('Person has been removed!'))
//     });

// ------------------------SAVE METHOD
// person.save()
//     .then(user => {
//         console.log(user)
//     })
//     .catch(e => console.log(e))
