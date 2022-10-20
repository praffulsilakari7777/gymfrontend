import React, { useEffect, useState } from 'react'; 
import ClassList from '../components/ClassList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";




const Classes = () => {
   const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [lodedUsers, setLoadedUsers] = useState();

useEffect(() => {
    const fetchUsers = async () => {

   
      try  {  
        const responseData =  await sendRequest(process.env.REACT_APP_BACKEND_URL + '/books');

    
      setLoadedUsers(responseData.Classes);
    } catch(err) {}
    };
    fetchUsers();
    }, [sendRequest]);

return (
    <React.Fragment>
    <ErrorModal error={error} onClear={clearError} />
    {isLoading && (
    // <div className="center">
    //     <LoadingSpinner />
    //     </div>
    <div>
       <SkeletonTheme color="#E5E5E5" highlightColor="#F5F5F5"  >
     <p>
    <Skeleton count={20}  height={70} width={"100%"}  />
    </p>
    
</SkeletonTheme>
    </div>
        )}
        
   {!isLoading && lodedUsers && (<ClassList items={lodedUsers} />) }
   
    </React.Fragment>
    );
};

export default Classes;