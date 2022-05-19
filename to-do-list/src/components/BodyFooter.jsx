const BodyFooter = () => {
  return <div className='flex bg-slate-50 dark:bg-gray-800  space-x-4 border px-4 font-medium tracking-wide text-lg hover:shadow-2xl text-gray-900 dark:text-gray-100 focus:outline-none focus:ring focus:ring-gray-900 focus:ring-opacity-80 rounded-md'>
                  <label  placeholder="No Items yet"></label>
                  <button className="hover:text-sky-700 active:text-sky-700">All</button>
                  <button className="hover:text-sky-700 active:text-sky-700">Active</button>
                  <button className="hover:text-sky-700 active:text-sky-700">Completed</button>
                  <button className="hover:text-sky-700 active:text-sky-700">Clear Completed</button>
                </div>
}

export default BodyFooter