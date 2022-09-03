import React, { useState } from 'react';
import styles from '../css/MobileNav.module.css';
import { Outlet, Link } from 'react-router-dom';
import { AiFillDashboard, AiFillSetting, AiOutlineLogout } from 'react-icons/ai';
import { BsUpcScan } from 'react-icons/bs';
import { HiMenu } from 'react-icons/hi'
import { GrClose } from 'react-icons/gr';

const MobileNav = () => {

    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    }

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
        <div className={styles.container} >
            <div className={open ? `${styles.navContainer} ${styles.active}` : `${styles.navContainer}`}>
                <div className={styles.menuIcon} >
                    {open ? <GrClose onClick={toggleMenu} /> : <HiMenu onClick={toggleMenu} />}
                </div>
                <div className={open ? `${styles.navLinks} ${styles.active}` : `${styles.navLinks}`}>
                    {
                        links.map((item, index) => {
                            return (
                                <div key={index} className={styles.navItem}>
                                    {item.logo}
                                    <Link onClick={toggleMenu} to={item.route}>{item.text}</Link>
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

export default MobileNav;