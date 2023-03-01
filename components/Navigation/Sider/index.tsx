import { Layout, Menu } from "antd";
import styles from '../../../styles/Navigation/Sider.module.css';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { FaPlus, FaThLarge } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { useRouter } from "next/router";

const { Sider } = Layout;

const items = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
}));

const SideMenu = () => {
    const router = useRouter();
    return (
        <Sider className={styles.sider}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image src="https://studio.d-id.com/assets/did_logo-fd41a82b.svg" width={80} height={80} alt="logo" className={styles.logo_img}></Image>
                    {/* <img src="https://studio.d-id.com/assets/did_logo-fd41a82b.svg" alt="logo" className={styles.logo_img}></img> */}
                </Link>
            </div>
            <div className={styles.menu}>
                <button className={styles.menu_button} onClick={() => router.push("/edit")}>
                    <FaPlus className={styles.plus}></FaPlus>
                    {/* <div className={[styles.sidebar_button_icon,styles.sidebar_button].join(" ")}></div> */}
                    <span className={styles.button_text}>Create Video</span>
                </button>
                <button className={styles.menu_button} onClick={() => router.push("/")}>
                    <FaThLarge className={styles.library}></FaThLarge>
                    {/* <div className={[styles.sidebar_button_icon,styles.sidebar_button].join(" ")}></div> */}
                    <span className={styles.button_text}>Video Library</span>
                </button>
                <div className={styles.hr}></div>
                <button className={styles.menu_button}>
                    <AiFillDollarCircle className={styles.pricing}></AiFillDollarCircle>
                    {/* <div className={[styles.sidebar_button_icon,styles.sidebar_button].join(" ")}></div> */}
                    <span className={styles.button_text}>Pricing</span>
                </button>
            </div>
            <div className={styles.bottom_section}></div>
        </Sider>
    )
}

export default SideMenu;
