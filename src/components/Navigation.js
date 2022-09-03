import React from 'react';
import styles from '../css/Navigation.module.css';
import { Outlet, useLocation } from 'react-router-dom';
import { AiFillDashboard, AiFillSetting, AiOutlineLogout } from 'react-icons/ai';
import { BsUpcScan } from 'react-icons/bs';
import { Link } from "react-router-dom";

import logo from '../images/scannerlogo.png';


const Navigation = () => {

    let location = useLocation();

    const links = [
        {
            logo: <AiFillDashboard />,
            route: '/scan',
            text: 'Dashboard'
        },
        {
            logo: <BsUpcScan />,
            route: '/scan',
            text: 'Scan'
        },
        {
            logo: <AiFillSetting />,
            route: '/scan',
            text: 'Settings'
        },
        {
            logo: <AiOutlineLogout />,
            route: '/scan',
            text: 'Logout'
        },
    ]

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <img src={logo} alt="SkuScanner" />
                </div>
                <div className={styles.links}>
                    {
                        links.map((item, index) => {
                            return (
                                <div className={location.pathname.includes(item.text.toLowerCase()) ? `${styles.linkItem} ${styles.active}` : `${styles.linkItem}`} key={index}>
                                    {item.logo}
                                    <Link to={item.route}>{item.text}</Link>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div className={styles.content}>
                <Outlet />
            </div>
        </div>
    );
}

export default Navigation;