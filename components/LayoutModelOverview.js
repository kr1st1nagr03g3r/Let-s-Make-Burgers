import React from 'react';
import styles from '../styles/Model-overview.module.css'
// import Link from "next/link";
// import Image from "next/image"
// import Router from "next/router";

class LayoutModelOverview extends React.Component {
    state = {  } 
    render() { 
        return (
<>
    <div className={styles.carousel}>
<div className={styles.sky}></div>
<div className={styles.grass}></div>
<div className={styles.road}></div>
    </div>
</>

        );
    }
}
 
export default LayoutModelOverview;

