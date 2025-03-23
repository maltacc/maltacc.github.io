import React from 'react'
import './Mail.css'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { IconButton, Avatar } from '@mui/material';
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
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import Box from '@mui/material/Box';
import img from '../assets/me2.jpg';

const Mail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { title, subject, description, time, images, avatar = undefined } = location.state || {}; // Extract email data

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
                <div className="mail__bodySubheaderLeft">
                    {console.log("avatar: ", avatar)}
                    {console.log("avatar link: ", `${process.env.PUBLIC_URL}/${avatar}`)}
                    {avatar && <Avatar src={`${process.env.PUBLIC_URL}/${avatar}`} />}
                    <p style={{ fontWeight: 'bold' }}>{subject}</p>
                </div>
                <div className="mail__bodySubheaderRight">
                    <p className="mail__time">
                        {time}
                    </p>
                    <IconButton>
                        <StarBorderOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <EmojiEmotionsOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <ReplyOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertOutlinedIcon />
                    </IconButton>
                </div>
            </div>
            <div className="mail__message">
                {/* <p>{description}</p> */}
                <div className="mail__markdown">
                    <MarkdownToJSX file_name={title}/>
                </div>
            </div>
        </div>
        <div className="mail__footer">
        {/* <img src='/attachments/logo192.png' alt=""></img> */}
        {/* {console.log("location.state", location.state)}
        {console.log("images", images)} */}
            {images?.map((image, index) => (
                <div className="image__card">
                    <Box
                        component="img"
                        sx={{
                            height: '9rem',
                            width: '12rem',
                            maxHeight: { xs: '5rem', md: '20rem' },
                            maxWidth: { xs: '5rem', md: '20rem' },
                        }}
                        style={{ backgroundColor: 'whitesmoke', objectFit: 'cover'}}
                        alt=""
                        src={`${process.env.PUBLIC_URL}/${image}`}
                    />
                    {/* <div className="overlay__cardinfo"></div> */}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Mail