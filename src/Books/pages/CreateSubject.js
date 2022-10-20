import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient }  from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import ImageUpload from '../../shared/components/FormElements/imageUpload';
import ImaUpload from '../../shared/components/FormElements/pdfUpload';

import './PlaceForm.css';
//mport { useParams } from 'react-router-dom';



const CreateSubject = () => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const classid = useParams().cid;

   const [formState, InputHandler] =  useForm(
        {
            subjectName: {
                value: '',
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
  


const subjectSubmitHandler = async event => {
    event.preventDefault();
  try {
    const formData = new FormData();
    formData.append('classNo', classid);
    formData.append('image', formState.inputs.image.value);
    formData.append('subjectName', formState.inputs.subjectName.value);
       await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/books/createSubject`, 'POST', formData);

// Redirect the  user to a different page
history.push(`/books/${classid}`);
window.location.reload(false);

} catch (err) {}
   
};

    return(  
        <React.Fragment>
        <ErrorModal error={error} onClear={clearError} />
    <form className="place-form"  onSubmit={subjectSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <Input 
        id="subjectName"
        element="input" 
        type="text" 
        label="Subject Name" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid Subject Name." 
        onInput={InputHandler}
        />
 <ImageUpload center id="image" onInput={InputHandler} />
 
 
        <Button type="submit" disabled={!formState.isValid}>ADD SUBJECT</Button>
    </form>
    </React.Fragment>
    );
}

export default CreateSubject;