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
    const blockId = useParams().bid;
    // const PageId = p.split('-');
    // const pageId=PageId[PageId.length-1];
    // console.log(pageId);

   const [formState, InputHandler] =  useForm(
        {
            linkName: {
                value: '',
                isValid: false
            },
            linkAddress: {
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
    formData.append('blockId', blockId);
    formData.append('linkName', formState.inputs.linkName.value);
    formData.append('linkAddress', formState.inputs.linkAddress.value);
       await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/pages/createLink`, 'POST', JSON.stringify({
        blockId: blockId,
     linkName: formState.inputs.linkName.value,
     linkAddress: formState.inputs.linkAddress.value
 }), {
     'Content-Type': 'application/json'
 });

// Redirect the  user to a different page

history.push(`/pages/createlink/${blockId}`);
// history.push(`/pages`);
window.location.reload(false);

} catch (err) {}
   
};

    return(  
        <React.Fragment>
        <ErrorModal error={error} onClear={clearError} />
    <form className="place-form"  onSubmit={subjectSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <h3>Add Link</h3>
        <Input 
        id="linkName"
        element="input" 
        type="text" 
        label="Link Name" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid Link Name." 
        onInput={InputHandler}
        />
         <Input 
        id="linkAddress"
        element="input" 
        type="text" 
        label="Link Address" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid Link Address." 
        onInput={InputHandler}
        />
 
 
 
{ auth.role=='admin' &&   <Button type="submit" disabled={!formState.isValid}>ADD Link</Button>}
    </form>
    </React.Fragment>
    );
}

export default CreateSubject;