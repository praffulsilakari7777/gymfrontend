import React, { useContext, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient }  from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import './PlaceForm.css';
import ImageUpload from '../../shared/components/FormElements/imageUpload';
import ImaUpload from '../../shared/components/FormElements/pdfUpload';

//mport { useParams } from 'react-router-dom';



const CreateChapter = () => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const categoryId = useParams().catid;

   const [formState, InputHandler] =  useForm(
        {
            fileName: {
                value: '',
                isValid: false
            },
            materialLink: {
                value: null,
                isValid: false
            }
        }, 
        false
    );

const history = useHistory();
  


// const [file, setFile] = useState();

// const onChangeHandler = async event => {
//     event.preventDefault();
//     let pickedFile;
//     console.log(event.target.files[0]);
//     pickedFile = event.target.files[0];
//     setFile(pickedFile);

// }



const chapterSubmitHandler = async event => {
    event.preventDefault();
console.log(formState.inputs);
  try {
    const formData = new FormData();
    formData.append('fileName', formState.inputs.fileName.value);
    formData.append('materialLink', formState.inputs.materialLink.value);
    formData.append('category', categoryId);


       await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/category/createMaterial`, 'POST', formData);


    //    JSON.stringify({
    //     fileName: formState.inputs.fileName.value,
    //     materialLink: formState.inputs.materialLink.value,
    //     category: categoryId
    // }), {
    //     'Content-Type': 'application/json'
    // }
// Redirect the  user to a different page

history.push(`/materials/${categoryId}`);
window.location.reload(false);

} catch (err) {}
   
};



    return(  
        <React.Fragment>
        <ErrorModal error={error} onClear={clearError} />
    <form className="place-form"  onSubmit={chapterSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <Input 
        id="fileName"
        element="input" 
        type="text" 
        label="File Name" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid file Name." 
        onInput={InputHandler}
        />

        <ImaUpload center id="materialLink" onInput={InputHandler}/>
        {/* <Input 
        id="chapterLink"
        element="input" 
        type="text" 
        label="Chapter Link" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid Chapter Link." 
        onInput={InputHandler}
        /> */}
      

        <Button type="submit" disabled={!formState.isValid}>ADD </Button>
    </form>
    </React.Fragment>
    );
}

export default CreateChapter;