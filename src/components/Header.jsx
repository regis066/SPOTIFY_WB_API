import React from 'react'
import './styles/Header.css'
import { useDataLayerContext } from '../DataLayer'
import {Avatar} from '@mui/material'
import {Search} from '@mui/icons-material'

const Header = ({spotify}) => {
    const [{user}, dispatch] = useDataLayerContext()
  return (
    <div className='header'>
    <div className="header_left">
    <Search />
    <input placeholder="Search for Artists, Songs, or Albums" type="text" />
  </div>
  <div className="header_right">
    <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
    <h4>{user?.display_name}</h4>
  </div>
    </div>
  )
}

export default Header