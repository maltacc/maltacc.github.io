import React from 'react'
import './Sidebar.css'
import { Button } from '@mui/material'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import SidebarOption from './SidebarOption';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import LabelImportantTwoToneIcon from '@mui/icons-material/LabelImportantTwoTone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar_composeContainer">
            <Button onClick={() => window.location = 'mailto:maggieguo2138@gmail.com'} startIcon={<EditOutlinedIcon fontSize='large' style={{color: 'gray'}}/>} className="sidebar_compose">Contact</Button>
        </div>
        <div className="sidebar_container">
            <SidebarOption Icon={InboxRoundedIcon} title="Home" number={54} selected={true} />
            <SidebarOption Icon={StarBorderOutlinedIcon} title="Starred" number={54} />
            <SidebarOption Icon={AccessTimeOutlinedIcon} title="Snoozed" number={54} />
            <SidebarOption Icon={NearMeOutlinedIcon} title="Sent" number={54}  />
            <SidebarOption Icon={LabelImportantTwoToneIcon} title="Important" number={54} />
            <SidebarOption Icon={ExpandMoreIcon} title="More" />
        </div>
    </div>
  )
}

export default Sidebar