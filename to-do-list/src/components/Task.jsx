import {FaTimes} from 'react-icons/fa'

const Task = ({task}) => {
  return (
    <div className="bg-slate-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border m-[5px] py-[10px] px-[20px] cursor-pointer">
        <div className='flex justify-between'>
            <h3>
                {task.text}
            </h3>
            <FaTimes className='text-slate-50 dark:text-gray-800 hover:text-gray-800 dark:hover:text-slate-50 object-none object-right'/>
        </div>    
    </div>
  )
}

export default Task