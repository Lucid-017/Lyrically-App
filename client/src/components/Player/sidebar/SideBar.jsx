import React from 'react'
import SideBarButtons from './SideBarButtons'
import {MdFavorite,MdSpaceDashboard} from 'react-icons/md'
import {IoLibrary} from 'react-icons/io5'
import {FaPlay,FaGripfire,FaSignOutAlt} from 'react-icons/fa'

function SideBar() {
  return (
    <div className='flex' style={{borderRadius:'30',width:"100px",height:"100%", backgroundColor:'#63B0CD'}}>
        <div className='flex flex-col justify-around align-center mx-auto items-center'>
            <img className='w-12 h-12 rounded-2xl' src="https://i0.wp.com/semprefuigeek.com.br/wp-content/uploads/2022/04/Naruto-Modo-Barion.jpg?fit=1280%2C720&ssl=1" alt="profile" />
            <div>
                <SideBarButtons to="/feed" icon={<MdSpaceDashboard/>} title="Feed"/>
                <SideBarButtons to="/trending" icon={<FaGripfire/>} title="Trending"/>
                <SideBarButtons to="/player" icon={<FaPlay/>} title="Player"/>
                <SideBarButtons to="/favourites" icon={<MdFavorite/>} title="Favourites"/>
                <SideBarButtons to="/library" icon={<IoLibrary/>} title="Library"/>
                
            </div>
            <SideBarButtons to="" icon={<FaSignOutAlt/>} title="Sign Out"/>
        </div>
        
    </div>
  )
}

export default SideBar