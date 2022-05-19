import React from 'react'
import {MdDarkMode} from 'react-icons/md'
import {MdOutlineLightMode} from 'react-icons/md'
import Checkbox from './Checkbox'

export const Header = ({darkTheme, setDarkTheme}) => {
  return (
    <div className='dark:bg-footer-texture bg-hero-pattern '>
        <div className="space-y-4 sm:w-auto p-1 w-full text-gray-200">
            <div className="mt-20 space-x-80 justify-center flex sm:-mx-1">
                <p className='text-4xl font-bold tracking-widerest'>
                    TODO
                </p>
                <button type="button" onClick={()=> setDarkTheme(!darkTheme)} className="px-2 py-1" >
                    {darkTheme ? <MdDarkMode/> : <MdOutlineLightMode/> }
                </button>
            </div>
        </div>
        <Checkbox />
    </div>
  )
}
