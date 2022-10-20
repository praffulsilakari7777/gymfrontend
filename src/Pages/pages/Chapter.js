import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ChapterList from '../components/ChapterList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


const Chapters = () => {
    const [loadedPlaces, setLoadedPlaces] = useState();
   const { isLoading, error, sendRequest, clearError} = useHttpClient();
  
   const subjectId = useParams().sid;

   useEffect(() => {

     const fetchPlaces = async () => {
     try {
       const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/books/chapters/${subjectId}`);
       setLoadedPlaces(responseData.Chapters);
} catch (err) {}
     };
     fetchPlaces();
   }, [sendRequest, subjectId]);

  


 return( 
     <React.Fragment>
     <ErrorModal error={error} onClear={clearError} />
     { isLoading && (<div>
     <SkeletonTheme color="#F5F5F5" highlightColor="#E5E5E5"  >
     <p>
    <Skeleton count={1}  height={100} width={"100%"}  />
    <Skeleton count={5}  height={30} width={"100%"} />
    </p>
    <p>
    <Skeleton count={1}  height={100} width={"100%"}  />
    <Skeleton count={5}  height={30} width={"100%"} />
    </p>
    <p>
    <Skeleton count={1}  height={100} width={"100%"}  />
    <Skeleton count={5}  height={30} width={"100%"} />
    </p>
    <p>
    <Skeleton count={1}  height={100} width={"100%"}  />
    <Skeleton count={5}  height={30} width={"100%"} />
    </p>
    
</SkeletonTheme>
     </div>)}
     {!isLoading && loadedPlaces && <ChapterList items={loadedPlaces} />}
     </React.Fragment>
 );
};

export default Chapters;