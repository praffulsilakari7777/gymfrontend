import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChapterList from '../components/ChapterList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import Button from '../../shared/components/FormElements/Button';


const UserBooks = () => {
    const [loadedPlaces, setLoadedPlaces] = useState();
   const { isLoading, error, sendRequest, clearError} = useHttpClient();
  
   const userId = useParams().userId;

   useEffect(() => {

     const fetchPlaces = async () => {
     try {
       const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/books/user/chapter/${userId}`);
       setLoadedPlaces(responseData.UserBooks);
} catch (err) {}
     };
     fetchPlaces();
   }, [sendRequest, userId]);

   const placeDeletedHandler = deletedPlaceId => {
     setLoadedPlaces(prevPlaces => prevPlaces.filter(place => place.id !== deletedPlaceId ));
   };


 return( 
     <React.Fragment>
     <ErrorModal error={error} onClear={clearError} />
     { isLoading && (<div className="center">
         <LoadingSpinner />
     </div>)}
     {!isLoading && loadedPlaces && <ChapterList items={loadedPlaces} />}
     {!isLoading && !loadedPlaces && <Button to="/">Bookmark book</Button>}
     </React.Fragment>
 );
};

export default UserBooks;