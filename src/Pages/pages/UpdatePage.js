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
    const pId = useParams().pid;
    const history = useHistory();


    const [formState, inputHandler, setFormData] = useForm(
        {
            urlName: {
                value: '',
                isValid: false
            },
            title : {
                value: '',
                isValid: false
            },
            description : {
                value: '',
                isValid: false
            },
            metaDescription : {
                value: '',
                isValid: false
            }
        },
        false
    );

   useEffect(() => {
       const fetchPlace = async () => {
           try {
          const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/pages/pageData/${pId}`);
         
          setLoadedPlace(responseData.Page);
          setFormData({
            urlName: {
                value: responseData.Page.urlName,
                isValid: true
            },
            title: {
                value: responseData.Page.title,
                isValid: true
            },
            description: {
                value: responseData.Page.description,
                isValid: true
            },
            metaDescription: {
                value: responseData.Page.metaDescription,
                isValid: true
            }

        }, true
        );
           } catch (err) {}
       } 
       fetchPlace();
   } , [sendRequest, pId, setFormData]);
   
    
     console.log(loadedPlace);

    const placeUpdateSubmitHandler = async event => {
        event.preventDefault();
      try {
          await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/pages/updatepage/${pId}`, 'PATCH', JSON.stringify({
            urlName: formState.inputs.urlName.value,
            title: formState.inputs.title.value,
            description: formState.inputs.description.value,
            metaDescription: formState.inputs.metaDescription.value,
            
        }), {
            'Content-Type': 'application/json'
        });

        // const pageData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/pages/${loadedPlace.pageId}`);
        // const url=pageData.Page.heading+'-'+loadedPlace.pageId;
      history.push(`/pages`);
      window.location.reload(false);
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
        <h2>Could not find block!</h2>
        </Card>
        </div>

        );
    }



    return (
    <React.Fragment>
    <ErrorModal error={error} onClear={clearError} />
    { !isLoading && loadedPlace && 
    <form className="place-form" onSubmit={placeUpdateSubmitHandler} > 
    <h3>Edit Page</h3>
     <Input 
        id="urlName"
        element="input" 
        type="text" 
        label="Url Name" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid url Name." 
        onInput={inputHandler}
        initialValue={loadedPlace.urlName}
        initialValid={true}
        />

<Input 
        id="title"
        element="" 
        type="text" 
        label="title" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid  title." 
        onInput={inputHandler}
        initialValue={loadedPlace.title}
        initialValid={true}
        />

<Input 
        id="description"
        element="" 
        type="text" 
        label="Description" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid  description." 
        onInput={inputHandler}
        initialValue={loadedPlace.description}
        initialValid={true}
        />

<Input 
        id="metaDescription"
        element="" 
        type="text" 
        label="meta Description" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid  metaDescription." 
        onInput={inputHandler}
        initialValue={loadedPlace.metaDescription}
        initialValid={true}
        />
         

        {/* <input type="file" name="file" onChange={onChangeHandler}/> */}


      <Button type="submit">
          UPDATE BLOCK
      </Button>
    </form>}
    </React.Fragment>
    );
        
};

export default UpdateChapter;