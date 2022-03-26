import React from 'react';
import "./Topbar.css"
import {NotificationsNone, Language, Settings} from '@mui/icons-material';

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>Admin</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNone/>
            <span className='topIconBadge'>2</span>
          </div>

          <div className='topbarIconContainer'>
            <Language/>
            <span className='topIconBadge'>2</span>
          </div>

          <div className='topbarIconContainer'>
            <Settings/>
          </div>

          <img src="https://i.guim.co.uk/img/media/d31ebd49b32a5aa609a584ababb1e03bc70b4942/573_213_2929_1758/master/2929.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=31c49726c022c1d41ee9b9b6b7254b46" alt="avatar" className='topAvatar'/>
        </div>
      </div>
    </div>
  )
}

export default Topbar