import React from 'react'
import './styles/Sidebar.css'
import SidebarOptions from './SidebarOptions'
import{ HomeOutlined, SearchOutlined, LibraryMusicOutlined } from '@mui/icons-material'
import { useDataLayerContext } from '../DataLayer'

const Sidebar = () => {
  const {playlists} = useDataLayerContext();
  return (
    <div className='sidebar'>
    <img className='sidebar-logo' src="/white-spotify-logo.jpg" alt="" />
    <SidebarOptions title="Home" Icon={HomeOutlined } />
    <SidebarOptions title="Search" Icon={SearchOutlined} />
    <SidebarOptions title="Your Library" Icon= {LibraryMusicOutlined} />
    <br />
    <strong className='sidebar-title'>
    PLAYLISTS
    </strong>
    <hr />
    {playlists?.items?.map((playlist) => (
      <SidebarOptions title={playlist.name}/>
    ))}
    </div>
  )
}

export default Sidebar