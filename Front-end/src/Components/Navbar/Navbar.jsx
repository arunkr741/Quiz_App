import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../Images/logo4.png";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {saveData,loadData} from "../../LocalStorage/localstorage"
import {SignOut} from "../../Redux/Auth/action"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:"#11bf71",
    borderRadius:"10px",
    [theme.breakpoints.down('sm')]: {
      height:"50px",
      fontSize:"12px"
    },
    "&:hover":{
      backgroundColor:"black"
    }
  },
}));
const Navbar = () => {
  const classes = useStyles();

  const { isAuth } = useSelector((state) => state.auth);
  let dispatch = useDispatch()

  const handleLogOut=()=>{
   dispatch(SignOut())
   console.log(isAuth)
  }

 
  return (
    <div className={styles.navbar_cont}>
      <div className={styles.navbar_left_cont}>
     
      <img width="60px" src={logo} alt="Logo" />
           
     
      </div>
      <div className={styles.navbar_right_cont}>

        {isAuth ? (
          <Button className={classes.root} onClick={handleLogOut} variant="contained">
            <Link  className={styles.link} to="/login">
              LOG OUT
            </Link>
          </Button>
        ) : (
          <Button className={classes.root} variant="contained">
            <Link className={styles.link} to="/login">
              LOG IN
            </Link>   
          </Button>
        )}

{!isAuth ? (
            <Button className={classes.root} variant="contained">
            <Link className={styles.link} to="/register">
              Register
            </Link>
          </Button>
        ) : null
          
        }
      
      {isAuth ? (
             <Button className={classes.root} variant="contained">
             <Link className={styles.link} to="/profile">
               DashBoard
             </Link>
           </Button>
        ) : null
          
        }
       <Link  to="/questions">
              
             </Link>
      </div>
    </div>
  );
};

export default Navbar;
