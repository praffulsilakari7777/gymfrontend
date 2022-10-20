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
    const subjectid = useParams().sid;

   const [formState, InputHandler] =  useForm(
        {
            chapterName: {
                value: '',
                isValid: false
            },
            chapterNumber: {
                value: '',
                isValid: false
            },
            chapterLink: {
                value: null,
                isValid: false
            },
            image: {
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
    formData.append('chapterName', formState.inputs.chapterName.value);
    formData.append('chapterNumber', formState.inputs.chapterNumber.value);
    formData.append('image', formState.inputs.image.value);
    formData.append('chapterLink', formState.inputs.chapterLink.value);
    formData.append('description', formState.inputs.description.value);
    formData.append('subject', subjectid);


       await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/books/createChapter`, 'POST', formData);

// Redirect the  user to a different page
window.location.reload(false);
history.push(`/books/chapters/${subjectid}`);

} catch (err) {}
   
};



    return(  
        <React.Fragment>
        <ErrorModal error={error} onClear={clearError} />
    <form className="place-form"  onSubmit={chapterSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <Input 
        id="chapterName"
        element="input" 
        type="text" 
        label="Chapter Name" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid Chapter Name." 
        onInput={InputHandler}
        />
          <Input 
        id="chapterNumber"
        element="input" 
        type="text" 
        label="Chapter Number" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid Chapter Number." 
        onInput={InputHandler}
        />

<Input 
        id="description"
        element="input" 
        type="text" 
        label="Description" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid Description." 
        onInput={InputHandler}
        />
        

        {/* <input type="file" name="file" onChange={onChangeHandler}/> */}

        <ImageUpload center id="image" onInput={InputHandler} />
        <ImaUpload center id="chapterLink" onInput={InputHandler}/>
        {/* <Input 
        id="chapterLink"
        element="input" 
        type="text" 
        label="Chapter Link" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid Chapter Link." 
        onInput={InputHandler}
        /> */}
      

        <Button type="submit" disabled={!formState.isValid}>ADD CHAPTER</Button>
    </form>
    </React.Fragment>
    );
}

export default CreateChapter;