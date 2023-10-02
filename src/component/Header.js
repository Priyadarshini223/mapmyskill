import React from 'react'
import './header.css'
import LogoutIcon from '@mui/icons-material/Logout';
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
const Header = () => {
  function logout() {
    localStorage.removeItem("umail")
    localStorage.removeItem("upass")
  }
  return (
    <div id='header' className='header'>
    <GroupRemoveIcon className='user'/>
    <button onClick={logout}><LogoutIcon/>   Logout</button>
      
    </div>
  )
}

export default Header
