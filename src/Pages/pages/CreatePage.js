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
    

   const [formState, InputHandler] =  useForm(
        {
            urlName: {
                value: '',
                isValid: false
            },
            title: {
                value: '',
                isValid: false
            },
            metaDescription: {
                value: '',
                isValid: false
            },
            description: {
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
console.log(formData.urlName);
       await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/pages/createPage`, 'POST', JSON.stringify({
           urlName: formState.inputs.urlName.value,
        title: formState.inputs.title.value,
        description: formState.inputs.description.value,
        metaDescription: formState.inputs.metaDescription.value
    }), {
        'Content-Type': 'application/json'
    });

// Redirect the  user to a different page

history.push(`/pages`);
window.location.reload(false);

} catch (err) {}
   
};



    return(  
        <React.Fragment>
        <ErrorModal error={error} onClear={clearError} />
    <form className="place-form"  onSubmit={chapterSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <h2>Add Page</h2>
        <Input 
        id="urlName"
        element="input" 
        type="text" 
        label="Url Name" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid Name." 
        onInput={InputHandler}
        />
          <Input 
        id="title"
        element="input" 
        type="text" 
        label="Page title" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid  title." 
        onInput={InputHandler}
        />

        <Input 
        id="description"
        element="" 
        type="text" 
        label="Description" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid Description." 
        onInput={InputHandler}
        />
        <Input 
        id="metaDescription"
        element="" 
        type="text" 
        label="Meta Description" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid Meta Description." 
        onInput={InputHandler}
        />
        

        {/* <input type="file" name="file" onChange={onChangeHandler}/> */}

        {/* <ImageUpload center id="image" onInput={InputHandler} />
        <ImaUpload center id="chapterLink" onInput={InputHandler}/> */}
        {/* <Input 
        id="chapterLink"
        element="input" 
        type="text" 
        label="Chapter Link" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid Chapter Link." 
        onInput={InputHandler}
        /> */}
      

        <Button type="submit" disabled={!formState.isValid}>Create Page</Button>
    </form>
    </React.Fragment>
    );
}

export default CreateChapter;