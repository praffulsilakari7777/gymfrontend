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
    const cId = useParams().caid;
    const history = useHistory();


    const [formState, InputHandler, setFormData] = useForm(
        {
            chapterName: {
                value: '',
                isValid: false
            },
            chapterNumber: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            }
        },
        false
    );

   useEffect(() => {
       const fetchPlace = async () => {
           try {
          const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/books/chapter/${cId}`);
          setLoadedPlace(responseData.Chapter);
          setFormData({
            chapterName: {
                value: responseData.Chapter.chapterName,
                isValid: true
            },
  
            chapterNumber: {
                value: responseData.Chapter.chapterNumber,
                isValid: true
            },
            description: {
                value: responseData.Chapter.description,
                isValid: true
            },

        }, true
        );
           } catch (err) {}
       } 
       fetchPlace();
   } , [sendRequest, cId, setFormData]);

    
     

    const placeUpdateSubmitHandler = async event => {
        event.preventDefault();

      try {

        const formData = new FormData();
    formData.append('chapterName', formState.inputs.chapterName.value);
    formData.append('chapterNumber', formState.inputs.chapterNumber.value);
    formData.append('description', formState.inputs.description.value);
    formData.append('solutionLink', formState.inputs.solutionLink.value);
  

          await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/books/updatechapter/${cId}`, 'PATCH', formData);
      history.push(`/books/chapters/${cId}`);
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
        id="chapterName"
        element="input" 
        type="text" 
        label="Chapter Name" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid Chapter Name." 
        onInput={InputHandler}
        initialValue={loadedPlace.chapterName}
        initialValid={true}
        />
          <Input 
        id="chapterNumber"
        element="input" 
        type="text" 
        label="Chapter Number" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid Chapter Number." 
        onInput={InputHandler}
        initialValue={loadedPlace.chapterNumber}
        initialValid={true}
        />

<Input 
        id="description"
        element="input" 
        type="text" 
        label="Description" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid Description." 
        onInput={InputHandler}
        initialValue={loadedPlace.description}
        initialValid={true}
        />
        <h4>Upload solution (Optional)</h4>
        <ImaUpload center id="solutionLink" onInput={InputHandler}/>

        {/* <input type="file" name="file" onChange={onChangeHandler}/> */}


      <Button type="submit">
          UPDATE PLACE
      </Button>
    </form>}
    </React.Fragment>
    );
        
};

export default UpdateChapter;