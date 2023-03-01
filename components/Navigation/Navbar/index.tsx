import { Layout, theme } from 'antd';
import styles from '../../../styles/Navigation/Navbar.module.css'
import React, { useState } from "react";

const { Header } = Layout;

const Navbar = ({title}:any) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Header className={styles.header_color}>
            <div className={styles.header_nav_menu}>
                <div className={styles.title}>
                    <span>{title}</span>
                </div>
                <div>
                    <button className={styles.create_button}>CREATE VIDEO</button>
                </div>
            </div>
        </Header>
    )
}

export default Navbar;
