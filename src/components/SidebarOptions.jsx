import React from 'react'
import './styles/SidebarOptions.css'

const SidebarOptions = ({title, Icon}) => {
  return (
    <div className='sidebarOptions'>
    {Icon && <Icon className="sidebarOptions_icons"/>}
    {Icon ? <h4>{title}</h4>: <p>{title}</p>}
    </div>
  )
}

export default SidebarOptions