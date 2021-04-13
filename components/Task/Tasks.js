const Tasks = ({ tasks }) => {
    return (
        <div>
            <h1>Tasks</h1>

            <ul style={{ textDecoration: "none" }}>
                {
                    tasks.map(task => <li key={task.id}>{task.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Tasks;