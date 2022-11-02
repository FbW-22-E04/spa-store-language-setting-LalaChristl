import React from 'react'
import LanguageChooser from './LanguageChooser'

const Header = () => {
  return (
<div className="relative w-full lg:max-w-sm ">
    <p className='m-4 text-3xl'>Please select your language</p>
           <LanguageChooser/>
        </div>
  )
}

export default Header
