import Task from './Task'

const Tasks = ({ tasks}) => {
  return (
    <>
        {tasks.map((task) => (
        <Task className="flex content-between items-center" key={task.id} task={task}/>
        ))}
    </>
  )
}

export default Tasks