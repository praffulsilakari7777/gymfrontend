import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import EarningsList from '../components/EarningsList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


const Subjects = () => {
   const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [lodedUsers, setLoadedUsers] = useState();

    // const memberId = useParams().mid;
useEffect(() => {
    const fetchUsers = async () => {

   
      try  {  
        const responseData =  await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/gym/allearnings`);

        console.log(responseData.Earnings);
       
      setLoadedUsers(responseData.Earnings);
      console.log(lodedUsers);

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
//     <SkeletonTheme color="#F5F5F5" highlightColor="#E5E5E5"  >
//   <p>
//  <Skeleton count={20}  height={70} width={"100%"}  />
//  </p>
 
// </SkeletonTheme>
//  </div>
        )}
   {!isLoading && lodedUsers && (<EarningsList items={lodedUsers} />) }
    </React.Fragment>
    );
};

export default Subjects;