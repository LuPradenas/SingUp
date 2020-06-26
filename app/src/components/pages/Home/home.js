import React from "react";
import {Link} from 'react-router-dom'
import styles from './styles.module.scss';

const home  = () => {
   
  return(
  <div className={styles.container}>
  <div className={styles.card}>
    <h2 className={styles.title}>WELCOME</h2>
    <p className={styles.subtitle}>Welcome to the login page</p>
     <div className={styles.btns}>
     <Link to="/Register" className={styles.btnRegister} >Register</Link> 
     <Link to="/SingUp" className={styles.btnLogIn} >Sing Up</Link>
   </div>
</div>
</div>
  );
}


export default home;