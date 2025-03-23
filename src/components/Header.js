import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import logo from '../assets/gmail.svg';
import '../components/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import me from '../assets/me2.jpg';

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="header">
          <div className="header__left">
              <IconButton>
                  <MenuIcon />
              </IconButton>
              <img 
                src={logo} 
                alt="logo" 
              />
          </div>
          <div className="header__middle">
            <IconButton>
              <SearchIcon />
            </IconButton>
              <input placeholder="Search mail" type="text"/>
              <IconButton>
                <TuneIcon className="header__tuneicon" />
              </IconButton>
          </div>
          <div className="header__right">
            <IconButton>
              <HelpOutlineIcon />
            </IconButton>
            <IconButton>
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton>
              <AppsIcon />
            </IconButton>
            <IconButton>
              <Avatar src={me} onClick={() => setShow(!show)}/>
            </IconButton>
          </div>
      </div>
      <div className="overlay__intro">
        {show && 
          <div className="header__overlay__content">
            <h5>maggieguo2138@gmail.com</h5>
            <Avatar src={me} sx={{ height: '100px', width: '100px' }}/>
            <div className="header__overlay__info">
              <h4>Hi, I'm Maggie!</h4>
              <div className='bio'>CS @ UWaterloo</div>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default Header