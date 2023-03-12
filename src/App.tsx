import React, { useState } from 'react'
import Sidenav from './components/Sidenav'

function App() {
  const [nav, setNav] = useState<boolean>(false);
  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div>
      <Sidenav className='absolute top-4 right-4 z-[99] md:hidden'/>
    </div>
  )
}

export default App
