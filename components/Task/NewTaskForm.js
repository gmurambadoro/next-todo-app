const {useState} = require("react");

const NewTaskForm = ({ handleTaskAdd }) => {
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        handleTaskAdd({name, isDone: false});

        setName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={event => setName(event.target.value)} />

            <button type={"submit"}>Create Task</button>
        </form>
    );
};

export default NewTaskForm;