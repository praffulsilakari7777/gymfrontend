import React, { useContext,useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import AdSense from 'react-adsense';
import { useHttpClient } from '../../shared/hooks/http-hook';
import Button from '../../shared/components/FormElements/Button';
import PageInfoList from '../components/PageInfoList';
import Card from '../../shared/components/UIElements/Card';
import { AuthCotext, AuthContext } from '../../shared/context/auth-context';

import Footer from '../../web-site/footer';
import Sidebar from '../../web-site/sidebar';
import ClassList from '../components/ClassList';
import {Helmet, HelmetProvider} from 'react-helmet-async';


const SubjectsList = props => {
 
  const p = useParams().pid;
  const pageId = p.split('-');
  const PageId=pageId[pageId.length-1];

    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [lodedUsers, setLoadedUsers] = useState();

useEffect(() => {
    const fetchUsers = async () => {

   
      try  {  
        const responseData =  await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/pages/${PageId}`);

    
      setLoadedUsers(responseData.Page);
    } catch(err) {}
    };
    fetchUsers();
    }, [sendRequest]);

    const auth = useContext(AuthContext);
  

    
console.log(PageId);
console.log(lodedUsers);

//     let keywords='Ncert';
//     {props.items.map(function(item) {
//       keywords+=', ';
// keywords+=item.subjectName;
// })};

    return (
       <React.Fragment>
                 {/* {!isLoading && lodedUsers &&  <HelmetProvider>
        <Helmet>
        <title>{lodedUsers[0].title}</title>
       
        <meta
          name="description"
          content={lodedUsers[0].metaDescription}
                  />
         </Helmet>
         </HelmetProvider>} */}
            <div className="page-section1">
             {/* <div class="container1"> */}
            
              <div className="row">
              
              <div class="row justify-content-center">
                {/* <div className="col-lg-8 py-3"> */}
                {!isLoading && lodedUsers && (<PageInfoList items={lodedUsers} />) }
             
    {/* <ul >
           {props.items.map(Blocks => (
           <BlocksItem 
           key={Blocks.id} 
           id={Blocks._id} 
           heading={Blocks.heading}
           links={Blocks.links} 
           linksCount={Blocks.links.length} 
/>
           ))}
    </ul> */}
    
   
    {/* <Sidebar /> */}
    {/* </div> */}
    </div>
   
    {/* </div> */}
    </div>
    </div>
  {/* <Footer /> */}
    </React.Fragment>
    );
};

export default SubjectsList;