import React from 'react'
import './SidebarOption.css'
import { useNavigate } from "react-router-dom";

const SidebarOption = ({ Icon, title, number, selected }) => {
  const navigate = useNavigate(); 
  return (
    <div className={`sidebarOption ${selected && 'sidebarOption--active'}`} onClick={() => navigate('/')}>
        <Icon />
        <h3>{title}</h3>
        <p>{number}</p>
    </div>
  )
}

export default SidebarOption