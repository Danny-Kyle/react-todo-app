const Checkbox = () => {
  return <div className="flex justify-center text-left">
  {/* <button type="button" className='flex bg-gray-700 border px-44 py-2 font-medium tracking-wide text-lg hover:shadow-2xl text-gray-300 focus:outline-none focus:ring focus:ring-gray-900 focus:ring-opacity-80 rounded-md' >
         Create a new Todo
  </button> */}
        <div class='container' className='flex dark:bg-gray-800 bg-slate-50 text-gray-100 dark:text-gray-900 py-2 font-medium'>
            <input type='checkbox' id='checkbox' name='checkbox' className='' 
            onKeyDown={event => {
                if(event.key === 'Enter'){
                    this.props.handleKeyPress()
                }
            }}
            />
            {/* <input for='checkbox' type='text' placeholder='Create a new todo.......' className='text-gray-500' /> */}
        </div>
</div>
}

export default Checkbox