import styles from '../../../styles/Edit/UploadAudio.module.css';
import { FaUpload, FaMicrophone } from "react-icons/fa";
import React from 'react';

const UploadAudio = () => {
    // Create a reference to the hidden file input element
    const hiddenFileInput = React.useRef(null);

    // Programatically click the hidden file input element
    // when the Button component is clicked
    const handleClick = (event:any) => {
        hiddenFileInput.current.click();
    };

    // Call a function (passed as a prop from the parent component)
    // to handle the user-selected file 
    const handleChange = (event:any) => {
        const fileUploaded = event.target.files[0];
        // props.handleFile(fileUploaded);
    };

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <input
                    type="file"
                    ref={hiddenFileInput}
                    onChange={handleChange}
                    style={{display: 'none'}}
                />
                <div className={styles.uploader}>
                    <div className={styles.uploader_container}>
                        <button className={styles.uploader_button} onClick={handleClick}>
                            <FaUpload className={styles.upload_icon}></FaUpload>
                            <h2 className={styles.upload_h2}>Upload your own voice</h2>
                            <h3 className={styles.upload_h3}>Create more realistic videos by uploading your own voice.</h3>
                        </button>
                    </div>
                </div>
                <div className={styles.recorder}>
                    <FaMicrophone className={styles.mic_icon}></FaMicrophone>
                    <h3 className={styles.recorder_h3}>Record voice audio</h3>
                </div>
                <div style={{marginTop:21}}>
                    <button className={styles.generate_button}>GENERATE</button>
                </div>
            </div>
        </div>
    )
}

export default UploadAudio
