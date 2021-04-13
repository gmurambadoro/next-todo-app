const {Task} = require('../../../models');

export default async (req, res) => {
    const { method } = req;

    if (method === 'POST') {
        // let's create a todo
        const task = new Task({
            name: 'Task #1 ' + (new Date()).toISOString(),
            isDone: false,
        });

        await task.save();

        res.status(201).json(task);

        return;
    } else if (method !== 'GET') {
        res.status(401).json({ message: 'Allow: GET, POST' });

        return;
    }

    const tasks = await Task.find();

    res.status(200).json(tasks);
}