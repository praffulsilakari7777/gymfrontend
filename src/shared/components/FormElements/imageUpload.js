import React, { useRef, useState, useEffect } from 'react';
import Button from './Button';

import './imageUpload.css';

import { makeStyles } from '@material-ui/core/styles';
import Button1 from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

const ImageUpload  = props => {
    const classes = useStyles();


    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState();
    const [isValid, setIsValid] = useState(false);
     
     const filePickerRef = useRef();


     useEffect(() => {
              if(!file) {
                  return;
              }
              const fileReader = new FileReader();
              fileReader.onload = () => {
                  setPreviewUrl(fileReader.result);
              };
              fileReader.readAsDataURL(file);
     }, [file])

     const pickedHandler = event => {
         let pickedFile;
         let fileIsValid = isValid;
        if  (event.target.files && event.target.files.length == 1) {
             pickedFile = event.target.files[0];
            setFile(pickedFile);
            setIsValid(true);
            fileIsValid = true;
        } else {
            setIsValid(false);
            fileIsValid = false;
        }
        props.onInput(props.id, pickedFile, fileIsValid);
     };

      const pickImageHandler = () => {
          filePickerRef.current.click();
      };


    return (
        <div className="form-control">
            <input 
               id={props.id} 
               ref={filePickerRef}
               style={{display: 'none'}} 
               type="file" 
               accept=".jpg, .png, .jpeg" 
               onChange={pickedHandler}
               />

               <div className={`image-upload ${props.center && 'center'}`}>
                   <div className="image-upload__preview">
                       { previewUrl && <img src={previewUrl} alt="Preview" />}
                       {!previewUrl && <IconButton color="primary" aria-label="upload picture" component="span"><PhotoCamera /></IconButton>}
                   </div>
                   <Button1
                   onClick={pickImageHandler}
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button1>
               </div>
               {!isValid && <p>{props.errorText}</p>}
        </div>
    );
};

export default ImageUpload;