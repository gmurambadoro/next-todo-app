export default (req, res) => {
    const { method, body } = req;

    if (method === 'POST') {
        // update todo


        return;
    } else if (method !== 'GET') {
        res.status(401).json({ message: 'Allow: GET, POST' });

        return;
    }

    res.status(200).json('Getting a todo by id');
}