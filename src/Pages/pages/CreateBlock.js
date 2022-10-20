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
    const p = useParams().pid;
    const PageId = p.split('-');
    const pageId=PageId[PageId.length-1];
    console.log(pageId);

   const [formState, InputHandler] =  useForm(
        {
            heading: {
                value: '',
                isValid: false
            },
            blockDescription: {
                value: '',
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
    formData.append('pageId', pageId);
    formData.append('heading', formState.inputs.heading.value);
       await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/pages/createBlock`, 'POST', JSON.stringify({
        pageId: pageId,
     heading: formState.inputs.heading.value,
     blockDescription: formState.inputs.blockDescription.value
 }), {
     'Content-Type': 'application/json'
 });

// Redirect the  user to a different page
const pageData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/pages/${pageId}`);
const url=pageData.Page.heading+'-'+pageId;
history.push(`/${url}`);
// history.push(`/pages`);
window.location.reload(false);

} catch (err) {}
   
};

    return(  
        <React.Fragment>
        <ErrorModal error={error} onClear={clearError} />
    <form className="place-form"  onSubmit={subjectSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <h2>Add Block</h2>
        <Input 
        id="heading"
        element="input" 
        type="text" 
        label="Heading" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid Heading." 
        onInput={InputHandler}
        />
         <Input 
        id="blockDescription"
        element="input" 
        type="text" 
        label="Block Description" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid Block Description." 
        onInput={InputHandler}
        />
 
 
 
        <Button type="submit" disabled={!formState.isValid}>ADD Block</Button>
    </form>
    </React.Fragment>
    );
}

export default CreateSubject;