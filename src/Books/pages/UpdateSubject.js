import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import './PlaceForm.css';
import ImageUpload from '../../shared/components/FormElements/imageUpload';
import ImaUpload from '../../shared/components/FormElements/pdfUpload';


const UpdateChapter = () => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedPlace, setLoadedPlace] = useState();
    const sId = useParams().sid;
    const history = useHistory();


    const [formState, inputHandler, setFormData] = useForm(
        {
            subjectName: {
                value: '',
                isValid: false
            }
        },
        false
    );

   useEffect(() => {
       const fetchPlace = async () => {
           try {
          const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/books/subject/${sId}`);
          setLoadedPlace(responseData.Subject);
          setFormData({
            subjectName: {
                value: responseData.Subject.subjectName,
                isValid: true
            }

        }, true
        );
           } catch (err) {}
       } 
       fetchPlace();
   } , [sendRequest, sId, setFormData]);

    
     

    const placeUpdateSubmitHandler = async event => {
        event.preventDefault();
      try {
          await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/books/updatesubject/${sId}`, 'PATCH', JSON.stringify({
            subjectName: formState.inputs.subjectName.value,
            
        }), {
            'Content-Type': 'application/json'
        });
      history.push('/');
    } catch (err) {}
    }


    if(isLoading) {
        return (
            <div className="center">
              <LoadingSpinner />
            </div>
        );
    }
  

    if (!loadedPlace && !error) {
        return (
            <div className="center">
                <Card>
        <h2>Could not find place!</h2>
        </Card>
        </div>

        );
    }


    return (
    <React.Fragment>
    <ErrorModal error={error} onClear={clearError} />
    { !isLoading && loadedPlace && 
    <form className="place-form" onSubmit={placeUpdateSubmitHandler} > 
     <Input 
        id="subjectName"
        element="input" 
        type="text" 
        label="Subject Name" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid Subject Name." 
        onInput={inputHandler}
        initialValue={loadedPlace.subjectName}
        initialValid={true}
        />
         

        {/* <input type="file" name="file" onChange={onChangeHandler}/> */}


      <Button type="submit">
          UPDATE SUBJECT
      </Button>
    </form>}
    </React.Fragment>
    );
        
};

export default UpdateChapter;