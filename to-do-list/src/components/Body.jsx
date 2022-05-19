import React from 'react'
import BodyFooter from './BodyFooter'
import BodyMain from './BodyMain'
import Tasks from './Tasks'
import { useState } from 'react'

export const Body = () => {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Jog around the park 3x',
    },
    {
        id:2,
        text:'10 minutes meditation',
    },
    {
        id:3,
        text:'Read for 1 hour',
    },
    {
        id: 4,
        text: 'Pick up groceries',
    },
    {
        id:5,
        text: 'Complete Todo App on FrontEnd Mentor'
    }
])

  return (
    <div className='text-gray-900 dark:text-gray-200 py-8 flex justify-center'>
            <div className="border rounded-md shadow-2xl dark:shadow-2xl tracking-wide">
              <BodyMain />
              <Tasks tasks={tasks}/>
              <BodyFooter />
            </div>
    </div>
  )
}
//line-through tailwind component for the tasks to be crossed out upon completion
//html input tag checkbox
//initial of 5 checkboxes to be created
//
