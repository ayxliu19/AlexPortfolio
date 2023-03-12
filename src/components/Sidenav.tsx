import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome} from 'react-icons/ai'

const Sidenav = () => {
    const [nav, setNav] = useState<boolean>(false);
    const handleNav = () => {
      setNav(!nav);
    }
    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99]'/>
            {
                nav ? (
                    <div>
                        <a href="#main">
                            <AiOutlineHome size={20} />
                            <span className='pl-4'>Home</span>
                        </a>
                    </div>
                    
                ) : (
                    <div></div>
                )
            }
        </div>
    )
}

export default Sidenav;