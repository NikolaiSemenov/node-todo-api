const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mogoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
	console.log(result);
});

// Todo.findOneAndRemove()

Todo.findByIdAndRemove(id).then((todo) => {
	console.log(todo);
})