import React, { useRef, useState, useEffect } from 'react';
import Button from './Button';

import './imageUpload.css';




import Button1 from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));


const ImaUpload  = props => {


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
  if  (event.target.files && event.target.files.length === 1) {
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
               accept=".pdf" 
               onChange={pickedHandler}
               />

               <div className={`image-upload ${props.center && 'center'}`}>
               <div className="image-upload__preview">
                       { previewUrl && <img src="data:image/png;base64,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" alt="Preview" />}
                       {!previewUrl && <p>Please pick an pdf file</p>}
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

export default ImaUpload;