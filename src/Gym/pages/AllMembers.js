import React, { useEffect, useState } from 'react'; 
import AllMembers_list from '../components/AllMembers_list';
import MembersTable_List from '../components/MembersTable_List';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import  './AllMembers.css';
import { GrGroup } from 'react-icons/gr';






const Classes = () => {
   const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [lodedUsers, setLoadedUsers] = useState();
  

useEffect(() => {
    const fetchUsers = async () => {

   
      try  {  
        const responseData =  await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/gym/allmembers`);

     console.log(responseData);
      setLoadedUsers(responseData.Members);
    } catch(err) {}
    };
    fetchUsers();
    }, [sendRequest]);

return (
    <React.Fragment>
    <ErrorModal error={error} onClear={clearError} />
    {isLoading && (
    <div className="center">
        <LoadingSpinner />
        </div>
//     <div>
//        <SkeletonTheme color="#E5E5E5" highlightColor="#F5F5F5"  >
//      <p>
//     <Skeleton count={20}  height={70} width={"100%"}  />
//     </p>
    
// </SkeletonTheme>
//     </div>
        )}
        <pre></pre>
        {/* <p className="h4 center">Gym Members &nbsp; <GrGroup /></p> */}
        <p className="h4 center">&nbsp; </p>
    

        <div className="container-sm">

   {!isLoading && lodedUsers && (

  //  <AllMembers_list items={lodedUsers} />
  <MembersTable_List items={lodedUsers} />
 
   
   
   ) }
   </div>
   
    </React.Fragment>
    );
};

export default Classes;