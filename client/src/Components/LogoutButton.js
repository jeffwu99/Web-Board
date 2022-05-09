import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    marginTop: '35px',
    marginRight: '55px',
    background: '#025cf4',
    boxShadow:  '1px 1px 3px #2c7afd',
    '&:hover': {
      color: '#ff867b'
    }
  },
});


export default function LogoutButton() {

  const logoutFunc = () => {
    //creating a fetch request as the cookies are httponly
    const logout = fetch('http://localhost:5000/login/logout', {
      credentials: 'include',
      method: 'DELETE'
    })
  }

  const classes = useStyles();

  return (
    <Button className={classes.root} onClick={logoutFunc}>Log Out</Button>
  )
}
