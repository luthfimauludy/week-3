import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { setLocale } from '@containers/App/actions';

import logo from '../../static/images/logo.png';

import classes from './style.module.scss';

const Navbar = ({ locale }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuPosition, setMenuPosition] = useState(null);
  const open = Boolean(menuPosition);

  const handleClick = (event) => {
    setMenuPosition(event.currentTarget);
  };

  const handleClose = () => {
    setMenuPosition(null);
  };

  const onSelectLang = (lang) => {
    if (lang !== locale) {
      dispatch(setLocale(lang));
    }
    handleClose();
  };

  const goHome = () => {
    navigate('/');
  };

  const goLogin = () => {
    navigate('/login');
  };

  const goRegister = () => {
    navigate('/register');
  };

  return (
    <div className={classes.headerWrapper} data-testid="navbar">
      <div className={classes.contentWrapper}>
        <div className={classes.logoImage} onClick={goHome}>
          <img src={logo} alt="logo" className={classes.logo} />
        </div>
        <div className={classes.rightContent}>
          <div className={classes.toolbar}>
            <div className={classes.toggle} onClick={handleClick}>
              <Avatar className={classes.avatar} src={locale === 'id' ? '/id.png' : '/en.png'} />
              <div className={classes.lang}>{locale}</div>
              <ExpandMoreIcon />
            </div>
          </div>
          <Menu open={open} anchorEl={menuPosition} onClose={handleClose}>
            <MenuItem onClick={() => onSelectLang('id')} selected={locale === 'id'}>
              <div className={classes.menu}>
                <Avatar className={classes.menuAvatar} src="/id.png" />
                <div className={classes.menuLang}>
                  <FormattedMessage id="app_lang_id" />
                </div>
              </div>
            </MenuItem>
            <MenuItem onClick={() => onSelectLang('en')} selected={locale === 'en'}>
              <div className={classes.menu}>
                <Avatar className={classes.menuAvatar} src="/en.png" />
                <div className={classes.menuLang}>
                  <FormattedMessage id="app_lang_en" />
                </div>
              </div>
            </MenuItem>
          </Menu>
          <div className={classes.boxBtn}>
            <button onClick={goLogin} className={classes.btnLogin} type="button">
              Login
            </button>
            <button onClick={goRegister} className={classes.btnRegister} type="button">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default Navbar;
