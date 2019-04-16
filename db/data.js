const {User} = require('../users/models');
let password = 'password123';
const users = [
    {
        username: 'Test1',
    }];
//     {
//         username: 'Test2',
//         password: String(bcrypt.hash(password,10))
//     },
//     {
//         username: 'Test3',
//         password: String(bcrypt.hash(password,10))
//     },
//     {
//         username: 'Test4',
//         password: String(bcrypt.hash(password,10))
//     }
// ]

console.log(users);

const pains = [
    {
        username: 'Test1',
        date: new Date('February 8, 2019 12:00:00'),
        location: '0',
        painLevel: 2
    }, {
        username: 'Test1',
        date: new Date('February 7, 2019 12:00:00'),
        location: '0',
        painLevel: 2
    }, {
        username: 'Test1',
        date: new Date('February 6, 2019 12:00:00'),
        location: '0',
        painLevel: 2
    }, {
        username: 'Test1',
        date: new Date('April 8, 2019 12:00:00'),
        location: '0',
        painLevel: 2
    }, {
        username: 'Test1',
        date: new Date('January 9, 2019 12:00:00'),
        location: '2',
        painLevel: 5
    }, {
        username: 'Test1',
        date: new Date('April 9, 2019 12:00:00'),
        location: '1',
        painLevel: 4
    }, {
        username: 'Test1',
        date: new Date('April 10, 2018 12:00:00'),
        location: '3',
        painLevel: 3
    }, {
        username: 'Test1',
        date: new Date('April 11, 2019 12:00:00'),
        location: '4',
        painLevel: 1
    }, {
        username: 'Test1',
        date: new Date('April 12, 2019 12:00:00'),
        location: '5',
        painLevel: 5
    }, {
        username: 'Test1',
        date: new Date('April 13, 2019 12:00:00'),
        location: '1',
        painLevel: 2
    }, {
        username: 'Test1',
        date: new Date('April 14, 2019 12:00:00'),
        location: '6',
        painLevel: 5
    }, {
        username: 'Test1',
        date: new Date('April 15, 2019 12:00:00'),
        location: '6',
        painLevel: 5
    }
]

/*const PainSchema = mongoose.Schema({
  username: {type: String, required: true},
  date: {type: Date, required: true, default: new Date()},
  location: {type: String, required: true},
  painLevel: {type: Number, required: true}
});*/

module.exports= { pains, users }