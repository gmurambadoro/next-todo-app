import {MONGO_URL} from "../config";

const mongoose = require('mongoose');

// connect to the database
mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Database Error: ' + err));

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
});

const taskSchema = new mongoose.Schema({
    name: String,
    isDone: Boolean,
});

const User = mongoose.model('User', userSchema);
const Task = mongoose.model('Task', taskSchema);

export { User, Task };