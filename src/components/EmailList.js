import React, { useState, useEffect } from 'react';
import './EmailList.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import Section from './Section';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EmailRow from './EmailRow';
import { home, about, skills, resume } from '../constants/Emails';

const EmailList = () => {
  const [selectedSection, setSelectedSection] = useState('Home'); // Default section
  const [descriptions, setDescriptions] = useState({});
  const allEmails = [...home, ...about, ...skills, ...resume];

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };
  
    useEffect(() => {
        allEmails.map((email) => {
            import(`../assets/markdown/${email.title}.md`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setDescriptions(d => ({ ...d, [email.title]: res })))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
        });
    }, []);

  return (
    <div className="emailList">
        <div className="emailList__settings">
            <div className="emailList_settingsLeft">
                <IconButton>
                    <CheckBoxOutlineBlankIcon />
                </IconButton>
                <IconButton>
                    <ArrowDropDownIcon />
                </IconButton>
                <IconButton>
                    <RefreshIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
            <div className="emailList_settingsRight">
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

        <div className="emailList_sections">
            <Section 
                Icon={InboxRoundedIcon} 
                title="Home" 
                color="rgb(66, 133, 244)" 
                selected={selectedSection === 'Home'}
                onClick={() => handleSectionClick('Home')}
            />
            <Section 
                Icon={LocalOfferOutlinedIcon} 
                title="About" 
                color="rgb(66, 133, 244)" 
                selected={selectedSection === 'About'}
                onClick={() => handleSectionClick('About')}
            />
            <Section 
                Icon={PeopleAltIcon} 
                title="Skills" 
                color="rgb(66, 133, 244)" 
                selected={selectedSection === 'Skills'}
                onClick={() => handleSectionClick('Skills')}
            />
            <Section 
                Icon={InfoOutlinedIcon} 
                title="Resume" 
                color="rgb(66, 133, 244)" 
                selected={selectedSection === 'Resume'}
                onClick={() => handleSectionClick('Resume')}
            />
        </div>

        <div className="emailList__content">
            {selectedSection === 'Home' && (
                <>
                    {home.map((email) => (
                        <EmailRow 
                            key={email.id} // Ensure each EmailRow has a unique key
                            title={email.title}
                            subject={email.subject}
                            description={descriptions[email.title]}
                            time={email.time}
                        />
                    ))}
                </>
            )}
            {selectedSection === 'Promotions' && (
                <>
                    {about.map((email) => (
                        <EmailRow 
                            key={email.id} // Ensure each EmailRow has a unique key
                            title={email.title}
                            subject={email.subject}
                            description={descriptions[email.title]}
                            time={email.time}
                        />
                    ))}
                </>
            )}
            {selectedSection === 'Social' && (
                <>
                    {skills.map((email) => (
                        <EmailRow 
                            key={email.id} // Ensure each EmailRow has a unique key
                            title={email.title}
                            subject={email.subject}
                            description={descriptions[email.title]}
                            time={email.time}
                        />
                    ))}
                </>
            )}
            {selectedSection === 'Resume' && (
                <>
                    {resume.map((email) => (
                        <EmailRow 
                            key={email.id} // Ensure each EmailRow has a unique key
                            title={email.title}
                            subject={email.subject}
                            description={descriptions[email.title]}
                            time={email.time}
                        />
                    ))}
                </>
            )}
        </div>
    </div>
  )
}

export default EmailList