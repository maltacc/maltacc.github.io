import React from 'react'
import './EmailRow.css'
import { IconButton } from '@mui/material';
import { CheckBoxOutlineBlank } from '@mui/icons-material'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { useNavigate } from "react-router-dom";

const EmailRow = ({ title, subject, description, time, images=[] }) => {
    const navigate = useNavigate();
    return (
    <div 
        onClick={() => navigate('/mail', { state: { title, subject, description, time, images } })} 
        className="emailRow"
    >
        <div className="emailRow__options">
            <IconButton>
                <CheckBoxOutlineBlank fontSize="small" />
            </IconButton>
            <IconButton>
                <StarBorderOutlinedIcon fontSize="small" />
            </IconButton>
        </div>

        <h5 className="emailRow__title">
            {title}
        </h5>

        <div className="emailRow__message">
            <h5>
                <div className="emailRow__message__subject">
                {subject}{" "}
                <span className="emailRow__description">- {description}</span>
                </div>
            </h5>
        </div>

        <p className="emailRow__time">
            {time}
        </p>
    </div>
  )
}

export default EmailRow