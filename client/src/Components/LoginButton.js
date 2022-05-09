import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  landing: {
    marginTop: '35px',
    marginRight: '55px',
    background: '#025cf4',
    boxShadow:  '1px 1px 3px #2c7afd',
    '&:hover': {
      color: '#ff867b'
    }
  },
});


export default function LoginButton() {

  const classes = useStyles();

  return (
    <Button className={classes.landing}>Log In || Sign Up</Button>
  )
}
