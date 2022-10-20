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
    const bId = useParams().bid;
    const history = useHistory();


    const [formState, inputHandler, setFormData] = useForm(
        {
            heading: {
                value: '',
                isValid: false
            },
            blockDescription : {
                value: '',
                isValid: false
            }
        },
        false
    );

   useEffect(() => {
       const fetchPlace = async () => {
           try {
          const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/pages/block/${bId}`);
         
          setLoadedPlace(responseData.Block);
          setFormData({
            heading: {
                value: responseData.Block.heading,
                isValid: true
            },
            blockDescription: {
                value: responseData.Block.blockDescription,
                isValid: true
            }

        }, true
        );
           } catch (err) {}
       } 
       fetchPlace();
   } , [sendRequest, bId, setFormData]);
   
    
     console.log(loadedPlace);

    const placeUpdateSubmitHandler = async event => {
        event.preventDefault();
      try {
          await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/pages/updateblock/${bId}`, 'PATCH', JSON.stringify({
            heading: formState.inputs.heading.value,
            blockDescription: formState.inputs.blockDescription.value,
            
        }), {
            'Content-Type': 'application/json'
        });

        const pageData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/pages/${loadedPlace.pageId}`);
        const url=pageData.Page.heading+'-'+loadedPlace.pageId;
      history.push(`/pages/${url}`);
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
          <h2>Edit Block</h2> 
     <Input 
        id="heading"
        element="input" 
        type="text" 
        label="Heading" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid Heading." 
        onInput={inputHandler}
        initialValue={loadedPlace.heading}
        initialValid={true}
        />

<Input 
        id="blockDescription"
        element="" 
        type="text" 
        label="Block Description" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid block description." 
        onInput={inputHandler}
        initialValue={loadedPlace.blockDescription}
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