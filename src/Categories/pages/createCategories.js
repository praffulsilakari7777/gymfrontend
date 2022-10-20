import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient }  from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import ImageUpload from '../../shared/components/FormElements/imageUpload';

import './PlaceForm.css';
//mport { useParams } from 'react-router-dom';



const CreateClass = () => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

   const [formState, InputHandler] =  useForm(
        {
            categoryName: {
                value: '',
                isValid: false
            }
        }, 
        false
    );

const history = useHistory();
  


const classSubmitHandler = async event => {
    event.preventDefault();
  try {
    const formData = new FormData();
    formData.append('categoryName', formState.inputs.categoryName.value);
       await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/category/createcategory`, 'POST', JSON.stringify({
     categoryName: formState.inputs.categoryName.value
 }), {
     'Content-Type': 'application/json'
 });

// Redirect the  user to a different page
history.push('/categories');
window.location.reload(false);
} catch (err) {}
   
};

    return(  
        <React.Fragment>
        <ErrorModal error={error} onClear={clearError} />
    <form className="place-form"  onSubmit={classSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <Input 
        id="categoryName"
        element="input" 
        type="text" 
        label="Category Name" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid Category Name." 
        onInput={InputHandler}
        />

        <Button type="submit" disabled={!formState.isValid}>ADD Categories</Button>
    </form>
    </React.Fragment>
    );
}

export default CreateClass;