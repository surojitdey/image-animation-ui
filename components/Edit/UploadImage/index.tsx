import styles from '../../../styles/Edit/UploadImage.module.css';
import { Image, message, Upload, Modal } from 'antd';
import { BsCloudUpload } from "react-icons/bs";
import React, {useState} from 'react';
import { LoadingOutlined, UploadOutlined, CloudUploadOutlined } from '@ant-design/icons';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';


const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
});


const UploadImage = () => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj as RcFile);
        }
    
        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
    };

    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => setFileList(newFileList);

    const uploadButton = (
        <div>
            <CloudUploadOutlined className={styles.uploader_icon} />
            <div className={styles.h3}>Drag and drop or browse to choose an image</div>
        </div>
    );

    return (
        <>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
            className={styles.main}
            accept="image/png, image/jpg, image/jpeg"
          >
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>
          <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
            <img alt='uploda-image' style={{ width: '100%' }} src={previewImage} />
            {/* <Image
                width={"100%"}
                height={198}
                src={previewImage}
                alt='uploda-image'
                rootClassName={styles.upload_image}
            /> */}
          </Modal>
        </>
    );

    // return (
    //     <div className={styles.main}>
    //         <h2 className={styles.h2}>Upload your image</h2>
    //         <h3 className={styles.h3}>PNG and JPG files are allowed</h3>
    //         <div className={styles.image_container}>
    //             <div className={styles.image_uploader}>
    //                 <BsCloudUpload className={styles.uploader_icon}></BsCloudUpload>
    //                 <span>Browse to choose a image</span>
    //             </div>
    //             {/* <Image
    //                 width={"100%"}
    //                 height={198}
    //                 src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    //                 alt='uploda-image'
    //                 rootClassName={styles.upload_image}
    //             /> */}
    //         </div>
    //     </div>
    // )
}

export default UploadImage
