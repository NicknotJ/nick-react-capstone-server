// const bcrypt = require('bcryptjs');
// // UserSchema.statics.hashPassword = function(password) {
// //   return bcrypt.hash(password, 10);
// // };

// let password = 'password123';
// const users = [
//     {
//         username: 'Test1',
//         password: String(bcrypt.hash(password,10))
//     },
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
        date: new Date('February 5, 2019 12:00:00'),
        location: '0',
        painLevel: 2
    }, {
        username: 'Test1',
        date: new Date('January 9, 2019 12:00:00'),
        location: '2',
        painLevel: 5
    }, {
        username: 'Test1',
        date: new Date('January 1, 2019 12:00:00'),
        location: '1',
        painLevel: 4
    }, {
        username: 'Test1',
        date: new Date('December 9, 2018 12:00:00'),
        location: '3',
        painLevel: 3
    }, {
        username: 'Test1',
        date: new Date('August 10, 2019 12:00:00'),
        location: '4',
        painLevel: 1
    }, {
        username: 'Test2',
        date: new Date('February 8, 2019 12:00:00'),
        location: '5',
        painLevel: 5
    }, {
        username: 'Test2',
        date: new Date('February 1, 2019 12:00:00'),
        location: '1',
        painLevel: 2
    }, {
        username: 'Test1',
        date: new Date('February 8, 2019 12:00:00'),
        location: '6',
        painLevel: 5
    }, {
        username: 'Test1',
        date: new Date('February 7, 2019 12:00:00'),
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

module.exports= { pains }