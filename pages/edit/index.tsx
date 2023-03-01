import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from '../../styles/Edit/CreateVideo.module.css';
import PageLayout from '../../components/pageLayout'
import { Col, Row } from 'antd';
import UploadImage from '../../components/Edit/UploadImage';
import UploadAudio from '../../components/Edit/UploadAudio';


export default function Home() {
  return (
    <>
      <PageLayout title="Create Video">
        <Row className={styles.row}>
            <Col span={14} className={styles.upload_avatar}>
              <UploadImage></UploadImage>
            </Col>
            <Col span={10} className={styles.upload_audio}>
              <UploadAudio></UploadAudio>
            </Col>
        </Row>
      </PageLayout>
    </>
  );
}
