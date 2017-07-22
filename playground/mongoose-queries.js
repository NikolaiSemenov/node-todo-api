const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mogoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//var id = '597325bad18b9ec01beed702';
var userId = '5972dfb5a20a491338907f28';

// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById(userId).then((user) => {
	if (!user) {
		return console.log('User with like Id not found');
	}
	console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));