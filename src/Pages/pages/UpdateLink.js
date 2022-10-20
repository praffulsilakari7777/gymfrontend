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
    const lId = useParams().lid;
    const history = useHistory();


    const [formState, inputHandler, setFormData] = useForm(
        {
            linkName: {
                value: '',
                isValid: false
            },
            linkAddress : {
                value: '',
                isValid: false
            }
        },
        false
    );

   useEffect(() => {
       const fetchPlace = async () => {
           try {
          const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/pages/link/${lId}`);
         
          setLoadedPlace(responseData.Link);
          setFormData({
            heading: {
                value: responseData.Link.linkName,
                isValid: true
            },
            blockDescription: {
                value: responseData.Link.linkAddress,
                isValid: true
            }

        }, true
        );
           } catch (err) {}
       } 
       fetchPlace();
   } , [sendRequest, lId, setFormData]);
   
    
     console.log(loadedPlace);

    const placeUpdateSubmitHandler = async event => {
        event.preventDefault();
      try {
          await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/pages/updatelink/${lId}`, 'PATCH', JSON.stringify({
            linkName: formState.inputs.linkName.value,
            linkAddress: formState.inputs.linkAddress.value,
            
        }), {
            'Content-Type': 'application/json'
        });

        const pageData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/pages/urlbylink/${lId}`);
        var str = pageData.Page.title;
str = str.replace(/\s+/g, '-').toLowerCase();
         const url=str+'-'+pageData.Page._id;
      history.push(`/${url}`);
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
     <Input 
        id="linkName"
        element="input" 
        type="text" 
        label="Link Name" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid Heading." 
        onInput={inputHandler}
        initialValue={loadedPlace.linkName}
        initialValid={true}
        />

<Input 
        id="linkAddress"
        element="" 
        type="text" 
        label="Link Address" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid block description." 
        onInput={inputHandler}
        initialValue={loadedPlace.linkAddress}
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