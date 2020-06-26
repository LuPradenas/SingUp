import React from "react";
import styles from './styles.module.scss';
import {Link} from 'react-router-dom'
//import { library } from '@fortawesome/fontawesome-svg-core';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 

//library.add(faFacebookF); 

const  SingUp = () => {
     return(
    <div class={styles.cardBody}>
    <h2 class={styles.title1}>Welcome Back!</h2>
    <p class={styles.subtitle1}>To keep connected with us<br/>please login with your personal info</p>
    <p class={styles.wrap}>
    </p>
    <p class={styles.subtitle3}>or use your account</p>
    <form>
      <div className={styles.formGroup} >
        <input className={styles.formInput} type="email" placeholder="Email" required="required"/>
      </div>
      <div className={styles.formGroup}>
        <input className={styles.formInput} type="password" placeholder="Password" required="required"/>
      </div>
      <button className={styles.button}>Sing Up</button>
    </form>
    <Link to="/" className={styles.btnBack}> </Link>
  </div>
  )
}

 export default SingUp;