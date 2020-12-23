import React from 'react';
import {
  AppBar,
  Container,
  IconButton,
  SvgIcon,
  Typography,
} from '@material-ui/core';
import StarsIcon from '@material-ui/icons/Stars';

import { ReactComponent as Logo } from './NASA.svg';
import SearchBar from '../SearchBar';
import useStyles from './styles';

const Header = () => {
  const classes = useStyles();

  return (
    <section>
      <AppBar position="static">
        <Container maxWidth="lg" className={classes.mainContainer}>
          <IconButton className={classes.iconButton}>
            <SvgIcon className={classes.svgIcon}>
              <Logo />
            </SvgIcon>
          </IconButton>
          <div className={classes.smContainer}>
            <Typography variant="h1" className={classes.header}>
              NASA Gallery
            </Typography>
            <div className={classes.search}>
              <SearchBar />
            </div>
          </div>
          <IconButton className={classes.favoriteButton}>
            <StarsIcon />
          </IconButton>
        </Container>
      </AppBar>
    </section>
  );
};

export default Header;
