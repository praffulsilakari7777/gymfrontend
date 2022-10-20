import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import PDFSol1 from './PDFSol1';
import AllPagespdf from './allPagespdf';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';


const PDFSol = () => {
    const pid = useParams().pid;
   const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [lodedUsers, setLoadedUsers] = useState();

useEffect(() => {
    const fetchUsers = async () => {

   
      try  {  
        const responseData =  await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/books/chapter/${pid}`);

    
      setLoadedUsers(responseData.Chapter);

    } catch(err) {}
    };
    fetchUsers();
    }, [sendRequest, pid]);
return (
    <React.Fragment>
    <ErrorModal error={error} onClear={clearError} />
    {isLoading && (<div className="center">
        <LoadingSpinner />
        </div>)}
   {!isLoading && lodedUsers && ( <PDFSol1 items={lodedUsers} /> ) }
    </React.Fragment>
    );
};

export default PDFSol;

//  <PDF1 items={lodedUsers} />