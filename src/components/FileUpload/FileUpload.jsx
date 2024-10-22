import styles from "./FileUpload.module.scss"
import {Icons} from "../../components/Icons/Icons"

import{ useState } from 'react';

export const  FileUpload = ({icon, ...props }) => {

    const [files, setFiles] = useState([]);
   
    const handleFileChange = (event) => {
      const newFiles = Array.from(event.target.files);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      console.log("archivos",newFiles);
    };
  
    const handleRemoveFile = (fileToRemove) => {
      setFiles((prevFiles) => prevFiles.filter(file => file !== fileToRemove));
    };
  
    return(
        < div>
        <label 
        className={styles.custom_file_upload}  
            style={{
                width: `${props.size}px`,
                height: `${props.size}px`,
            }}> 
            <input
            type="file"
            multiple
            onChange={handleFileChange}
            />
            {icon}
        </label>    
        <div className={styles.file_list}>
          {files.map((file, index) => (
            <div key={index} className={styles.file_item}>
              <span>{file.name}</span>
              <button onClick={() => handleRemoveFile(file)}>
                <Icons icon="close" size={24} color="black" />
              </button>
            </div>
          ))}
        </div>
      </ div>
    )
 }