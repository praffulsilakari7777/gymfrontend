import React, { useContext } from 'react';
import AdSense from 'react-adsense';

import Button from '../../shared/components/FormElements/Button';
import QueryItem from './QueryItem';
import Card from '../../shared/components/UIElements/Card';
import { AuthCotext, AuthContext } from '../../shared/context/auth-context';
import MembersTable_Item from './MembersTable_Item';
// import Card from '../../shared/components/UIElements/Card';

import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { GoSearch } from 'react-icons/go';
import { GrGroup  } from 'react-icons/gr';
import PropTypes from "prop-types";
import CardTable from "./Cards/CardTable.js";
// import './ClassList.css';

const SubjectsList = props => {
    const color="light";
    const auth = useContext(AuthContext);
    if(props.items.length === 0) {
        return (
            <div className="center">
               <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
               No Query Found ! 
              </h3>
            </div>
        )
    }
// console.log(props.items);

return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
        
            <div className="row relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Customer Queries
              </h3>

            </div>
          </div>
        </div>
        <div className="center">

</div>

        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                Customer Name                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Query Date
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Customer Query
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Customer Number
                </th>
               
              
              </tr>
            </thead>
            <tbody>
           

  



            {props.items.map(Class => (            <QueryItem 
                                                key={Class.id} 
                                                id={Class._id} 
                                                name={Class.name}
                                                date={Class.date}
                                                query={Class.query}
                                                phonenumber={Class.phonenumber}
                                                />
         
           
           ))}



           
            </tbody>
          </table>
        </div>
      </div>
    </>
    //    <React.Fragment>
    // <ul >

    //        {props.items.map(Class => (
        //    <PackagesItem 
        //    key={Class.id} 
        //    id={Class._id} 
        //    packagename={Class.packagename}
        //    totalamount={Class.totalamount}
        //    month={Class.month}
        //    packagedescription={Class.packagedescription}
        //    />
    //         ))} 
    // </ul>
  
    // </React.Fragment>
    );
};

export default SubjectsList;