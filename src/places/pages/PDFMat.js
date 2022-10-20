import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import PDFMat1 from './PDFMat1';
import AllPagespdf from './allPagespdf';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import {Helmet, HelmetProvider} from 'react-helmet-async';

const PDFSol = () => {
    const p = useParams().matid;
    const P = p.split('-');
    const materialId=P[P.length-1];

    let strname='';
    for(let a=0;a<P.length-1;a++){
strname=strname+' '+P[a];
    }
    
   const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [lodedUsers, setLoadedUsers] = useState();

useEffect(() => {
    const fetchUsers = async () => {

   
      try  {  
        const responseData =  await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/category/getmaterialsbymaterialid/${materialId}`);

    
      setLoadedUsers(responseData.Material);

    } catch(err) {}
    };
    fetchUsers();
    }, [sendRequest, materialId]);
    console.log(lodedUsers);
return (
    <React.Fragment>
        <HelmetProvider>
        <Helmet>
        <title>{`${strname} | Ncert eBooks`}</title>
       
        {/* <meta
          name="description"
          content={Class.metaDescription}
                  /> */}
         </Helmet>
         </HelmetProvider>
    <ErrorModal error={error} onClear={clearError} />
    {isLoading && (<div className="center">
        <LoadingSpinner />
        </div>)}
   {!isLoading && lodedUsers && ( <PDFMat1 items={lodedUsers} /> ) }
    </React.Fragment>
    );
};


export default PDFSol;

//  <PDF1 items={lodedUsers} />