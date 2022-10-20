import React, { useContext } from 'react';
import AdSense from 'react-adsense';

import Button from '../../shared/components/FormElements/Button';
import EarningsItem from './EarningsItem';
import Card from '../../shared/components/UIElements/Card';
import { AuthCotext, AuthContext } from '../../shared/context/auth-context';
// import './ClassList.css';
import  '../assets/styles/tailwind.css';
import PropTypes from "prop-types";
import CardTable from "./Cards/CardTable.js";
import CardStats from "./Cards/CardStats";
import { BiRupee } from "react-icons/bi";

import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { GoSearch } from 'react-icons/go';
import moment from "moment";

const SubjectsList = props => {
    const [searchTerm, setSearchTerm]=useState("");
    


let color="light";
    let totalearnings=0;
    
    // props.items.filter((Class) => { if(searchTerm == ""){ 
    //     return (Class) }
    //   else if((Class.dateofearning.toLowerCase().includes(searchTerm.toLowerCase()))||(Class.monthyear.toLowerCase().includes(searchTerm.toLowerCase())))
    //   {
    //     return Class;
    //   }  }).map(Class => (
    
        {props.items.filter((Class)=>{ if(searchTerm == ""){ 
            return (Class) }
          else if((Class.dateofearning.toLowerCase().includes(searchTerm.toLowerCase()))||(Class.monthyear.toLowerCase().includes(searchTerm.toLowerCase())))
          {
            return Class;
          }  }).map(function(Class) {
            console.log(Class.earning)
    totalearnings+=Class.earning;
    console.log(Class.earning)
    })};



    let thismonthearning=0;
    let thismonth=1+moment(Date.now()).month()+"-"+moment(Date.now()).year();
    const [searchTerm1, setSearchTerm1]=useState(thismonth);
    {props.items.filter((Class)=>{ if(searchTerm1 == ""){ 
        return (Class) }
      else if((Class.dateofearning.toLowerCase().includes(searchTerm1.toLowerCase()))||(Class.monthyear.toLowerCase().includes(searchTerm1.toLowerCase())))
      {
        return Class;
      }  }).map(function(Class) {
        console.log(Class.earning)
        thismonthearning+=Class.earning;
console.log(thismonthearning)
})};



let yesterday=0;
    let thisyesterday=moment(Date.now()).subtract(1, 'days').format('YYYY-MM-DD');
    console.log(thisyesterday)
    const [searchTerm2, setSearchTerm2]=useState(thisyesterday);
    {props.items.filter((Class)=>{ if(searchTerm2 == ""){ 
        return (Class) }
      else if((Class.dateofearning.toLowerCase().includes(searchTerm2.toLowerCase()))||(Class.monthyear.toLowerCase().includes(searchTerm2.toLowerCase())))
      {
        return Class;
      }  }).map(function(Class) {
        console.log(Class.earning)
        yesterday+=Class.earning;
console.log(thisyesterday)
})};

console.log(yesterday)


let today=0;
    let thistoday=moment(Date.now()).format('YYYY-MM-DD');
    console.log(thistoday)
    const [searchTerm3, setSearchTerm3]=useState(thistoday);
    {props.items.filter((Class)=>{ if(searchTerm3 == ""){ 
        return (Class) }
      else if((Class.dateofearning.toLowerCase().includes(searchTerm3.toLowerCase()))||(Class.monthyear.toLowerCase().includes(searchTerm3.toLowerCase())))
      {
        return Class;
      }  }).map(function(Class) {
        console.log(Class.earning)
        today+=Class.earning;
console.log(today)
})};





    const auth = useContext(AuthContext);
    if(props.items.length === 0) {
        return (
            <div  className="center">
                <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
               No Transactions Found ! 
              </h3>
            </div>
        )
    }
console.log(props.items);

//     return (
//        <React.Fragment>
   
//     {totalearnings}
//            {props.items.map(Class => (
//            <EarningsItem 
//            key={Class.id} 
//            id={Class._id} 
//            phonenumber={Class.phonenumber}
//            dateofearning={Class.dateofearning}
//            earning={Class.earning}
//            member={Class.member}
//            type={Class.type}
//            totalearnings = {totalearnings}
//            />
//             ))} 
    
  
//     </React.Fragment>
//     );
// };





return (
    <>
     <div className="relative bg-lightBlue-900 md:pt-28 pb-4 pt-4">
        <div className="px-4 md:px-10 mx-auto w-full">
        <div className="flex flex-wrap">
    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
    <CardStats
      statSubtitle="Today's so far"
      statTitle={today} 
      statArrow="up"
    //   statPercent="3.48"
      statPercentColor="text-emerald-500"
      statDescripiron="Today's so far"
      statIconName="fas fa-chart-pie"
      statIconColor="bg-orange-500"
    />
    </div>
    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
    <CardStats
      statSubtitle="yesterday so far"
      statTitle={yesterday} 
      statArrow="up"
    //   statPercent="3.48"
      statPercentColor="text-emerald-500"
      statDescripiron="Yesterday so far"
      statIconName="fas fa-chart-pie"
      statIconColor="bg-orange-500"
    />
    </div>
    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
    <CardStats
      statSubtitle="This month so far"
      statTitle={thismonthearning} 
      statArrow="up"
    //   statPercent="3.48"
      statPercentColor="text-emerald-500"
      statDescripiron="This month so far"
      statIconName="fas fa-chart-pie"
      statIconColor="bg-orange-500"
    />
    </div>
    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle={`So far till ${searchTerm}`}
                  statTitle={totalearnings}
                  statArrow="up"
                //   statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron={`So far till ${searchTerm}`}
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
    </div>
    </div>
  </div>
    <div className="container-sm">
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
        
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Transaction Table
              </h3>
            </div>
            <TextField id="outlined-basic" label="Search Member" size="small" color="black"   variant="outlined" onChange={(event) => setSearchTerm(event.target.value)}/>&nbsp;<GoSearch />
          </div>
        </div>
        {/* <div className="center">
<TextField id="outlined-basic" label="Search Member" size="small" color="black"   variant="outlined" onChange={(event) => setSearchTerm(event.target.value)}/>&nbsp;<GoSearch />
<button onClick={() => setSearchTerm("ponty")}>Ponty</button>
<button onClick={() => setSearchTerm("")}>Clear</button>
</div> */}

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
               Transaction Date
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
               Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                 Amount
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Type
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Member's Phone No
                </th>
                {/* <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                 Payment Status
                </th> */}
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
{/* {props.items.map(Class => ( */}
{props.items.filter((Class) => { if(searchTerm == ""){ 
                                            return (Class) }
                                          else if((Class.dateofearning.toLowerCase().includes(searchTerm.toLowerCase()))||(Class.monthyear.toLowerCase().includes(searchTerm.toLowerCase())))
                                          {
                                            return Class;
                                          }  }).map(Class => (



                                          


                                            <EarningsItem 
                                            key={Class.id} 
                                            id={Class._id} 
                                            phonenumber={Class.phonenumber}
                                            dateofearning={Class.dateofearning}
                                            earning={Class.earning}
                                            member={Class.member}
                                            type={Class.type}
                                            totalearnings = {totalearnings}
                                            name={Class.fullname}
                                            />
           ))}



           
            </tbody>
          </table>
        </div>
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


export default SubjectsList;