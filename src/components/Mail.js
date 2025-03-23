import React from 'react'
import './Mail.css'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { IconButton } from '@mui/material';
import { useNavigate, useLocation } from "react-router-dom";
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import MarkdownToJSX from '../features/MarkdownToJSX';

const Mail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { title, subject, description, time } = location.state || {}; // Extract email data

    return (
    <div className="mail">
        <div className="mail__tools">
            <div className="mail__toolsLeft">
                <IconButton onClick={() => navigate('/')}>
                    <ArrowBackOutlinedIcon />
                </IconButton>
                <IconButton>
                    <ArchiveOutlinedIcon />
                </IconButton>
                <IconButton>
                    <ReportGmailerrorredOutlinedIcon />
                </IconButton>
                <IconButton>
                    <DeleteOutlineOutlinedIcon />
                </IconButton>
                <IconButton>
                    <MarkEmailUnreadOutlinedIcon />
                </IconButton>
                <IconButton>
                    <DriveFileMoveOutlinedIcon />
                </IconButton>
                <IconButton>
                    <MoreVertOutlinedIcon />
                </IconButton>
            </div>
            <div className="mail__toolsRight">
                <IconButton>
                    <ChevronLeftIcon />
                </IconButton>
                <IconButton>
                    <ChevronRightIcon />
                </IconButton>
                <IconButton>
                    <KeyboardIcon />
                </IconButton>
                <IconButton>
                    <ArrowDropDownIcon />
                </IconButton>
            </div>
        </div>
        <div className="mail__body">
            <div className="mail__bodyHeader">
                <h2>{title}</h2>
            </div>
            <div className="mail__bodySubheader">
                {/* <Avatar /> */}
                <p style={{ fontWeight: 'bold' }}>{subject}</p>
                <p className="mail__time">{time}</p>
            </div>
            <div className="mail__message">
                {/* <p>{description}</p> */}
                <div className="mail__markdown">
                    <MarkdownToJSX file_name={title}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mail