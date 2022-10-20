import React from "react";
import MembersTable_Item from './MembersTable_Item';
import Card from '../../shared/components/UIElements/Card';

import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { GoSearch } from 'react-icons/go';
import { GrGroup  } from 'react-icons/gr';
import PropTypes from "prop-types";
import CardTable from "./Cards/CardTable.js";

import  '../assets/styles/tailwind.css';
import moment from "moment";


import { filter } from 'lodash';



const ClassList = props => {

  const [searchTerm, setSearchTerm]=useState("");

    
        // const classes = useStyles();
        const color="light";
      
    if(props.items.length === 0) {
        return (
            <div className="center">
                
                <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                No Member Found ! 
              </h3>
            
            </div>
        )
    }


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
                Gym Members Table
                <p className={
                  "font-semibold text-sm " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }>(Total Members - {props.items.length})</p>
              </h3>
              
              <div className="col-sm self-align-right">
              <button className="text-blueGray-500 bg-transparent border border-solid border-blueGray-500 hover:bg-blueGray-600 hover:text-white active:bg-blueGray-600 active:text-white font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setSearchTerm("Active")}>Active</button>
              <button className="text-blueGray-500 bg-transparent border border-solid border-blueGray-500 hover:bg-blueGray-600 hover:text-white active:bg-blueGray-600 active:text-white font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={() => setSearchTerm("Expired")}>Expired</button>
              <button className="text-blueGray-500 bg-transparent border border-solid border-blueGray-500 hover:bg-blueGray-600 hover:text-white active:bg-blueGray-600 active:text-white font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={() => setSearchTerm("disabled")}>Disabled</button>
              <button className="text-blueGray-500 bg-transparent border border-solid border-blueGray-500 hover:bg-blueGray-600 hover:text-white active:bg-blueGray-600 active:text-white font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={() => setSearchTerm("Expired in 3 Days")}>Expire in 3 Days</button>
              <button className="text-blueGray-500 bg-transparent border border-solid border-blueGray-500 hover:bg-blueGray-600 hover:text-white active:bg-blueGray-600 active:text-white font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={() => setSearchTerm("")}>Clear</button>
              </div>
              <TextField id="outlined-basic" label="Search Member" size="small" color="black"   variant="outlined" onChange={(event) => setSearchTerm(event.target.value)}/>&nbsp;<div className="center"><GoSearch className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" /></div>
            </div>
          </div>
        </div>
        <div className="center">
{/* <TextField id="outlined-basic" label="Search Member" size="small" color="black"   variant="outlined" onChange={(event) => setSearchTerm(event.target.value)}/>&nbsp;<GoSearch /> */}
{/* <button onClick={() => setSearchTerm("Somya")}>Ponty</button> */}&nbsp;
{/* <button className="text-blueGray-500 bg-transparent border border-solid border-blueGray-500 hover:bg-blueGray-600 hover:text-white active:bg-blueGray-600 active:text-white font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setSearchTerm("Active")}>Active</button>
<button className="text-blueGray-500 bg-transparent border border-solid border-blueGray-500 hover:bg-blueGray-600 hover:text-white active:bg-blueGray-600 active:text-white font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={() => setSearchTerm("Expired")}>Expired</button>
<button className="text-blueGray-500 bg-transparent border border-solid border-blueGray-500 hover:bg-blueGray-600 hover:text-white active:bg-blueGray-600 active:text-white font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={() => setSearchTerm("")}>Clear</button> */}

</div>

        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                Full Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Phone Number
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Status
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Expiry Date
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                 Payment Status
                </th>
                {/* <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                ></th> */}
              </tr>
            </thead>
            <tbody>
           

            {/* {props.items.filter((Class) => { if(searchTerm == ""){ 
                                            return (Class.expirydate>new Date().toISOString()) }
                                          else if((Class.fullname.toLowerCase().includes(searchTerm.toLowerCase()))||(Class.phonenumber.toLowerCase().includes(searchTerm.toLowerCase()))||(Class.expirydate>new Date().toISOString()))
                                          {
                                            return Class;
                                          }  }).map(Class => ( */}

{props.items.filter((Class) => { if(searchTerm == ""){ 
                                            return (Class) }
                                            else if(searchTerm == "disabled") {
                                              return (Class.disabled==true)
                                            }                                            
                                            else if(searchTerm == "Active") {
                                              return (Class.expirydate>new Date().toISOString()&&Class.disabled==false)
                                            }                                                                                      
                                            else if(searchTerm == "Expired") {
                                              return (Class.expirydate<new Date().toISOString()&&Class.disabled==false)
                                            }
                                            else if(searchTerm == "Expired in 3 Days") {
                                              return (Class.expirydate<moment(Date.now()).add(3, 'days').toISOString()&&!(Class.expirydate<new Date().toISOString())&&Class.disabled==false)
                                            }
                                          else if((Class.fullname.toLowerCase().includes(searchTerm.toLowerCase()))||(Class.phonenumber.toLowerCase().includes(searchTerm.toLowerCase())))
                                          {
                                            return Class;
                                          }  }).map(Class =>
                                            //  {if((searchTerm == "Active")&&(Class.expirydate>Date.now()))(
                                          


           <MembersTable_Item 
           key={Class.id} 
           id={Class._id} 
           fullname={Class.fullname}
           gender={Class.gender}
           email={Class.email}
           phonenumber={Class.phonenumber}
           dateofjoining={Class.dateofjoining}
           dateofbirth={Class.dateofbirth} 
           expirydate={Class.expirydate}
           address={Class.address}
           trainingtype={Class.trainingtype}
           packages={Class.packages}
           registrationfeestatus={Class.registrationfeestatus}
           disabled={Class.disabled}
          
           />
          //  )


          //  else (
                                          


          //   <MembersTable_Item 
          //   key={Class.id} 
          //   id={Class._id} 
          //   fullname={Class.fullname}
          //   gender={Class.gender}
          //   email={Class.email}
          //   phonenumber={Class.phonenumber}
          //   dateofjoining={Class.dateofjoining}
          //   dateofbirth={Class.dateofbirth} 
          //   expirydate={Class.expirydate}
          //   address={Class.address}
          //   trainingtype={Class.trainingtype}
          //   packages={Class.packages}
          //   registrationfeestatus={Class.registrationfeestatus}
           
          //   />
            // ) 
            // }
           
           )}



           
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};



export default ClassList;