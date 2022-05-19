import React, {useState} from 'react';
import {Body} from './components/Body'
import {Footer} from './components/Footer'
import {Header} from './components/Header'

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
    return (
        <div className={darkTheme ? 'dark' : ''}>
            <div className='bg-gray-50 dark:bg-gray-900 h-screen'>
                <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
                <Body />
                <Footer />
            </div>
        </div>
    )
}

export default App