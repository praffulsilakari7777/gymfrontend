import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
// import './ClassItem.css';
import { AuthCotext, AuthContext } from "../../shared/context/auth-context";
import Button from "../../shared/components/FormElements/Button";
//import Button1 from '@material-ui/core/Button';
import { useHttpClient } from "../../shared/hooks/http-hook";

import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

import "../assets/styles/tailwind.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
// import Moment from 'react-moment';

import moment from "moment";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button1 from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { common } from "@material-ui/core/colors";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdPermPhoneMsg } from "react-icons/md";
import { SiGravatar } from "react-icons/si";
import { FaBirthdayCake, FaHandshake } from "react-icons/fa";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Moment from "react-moment";
import Input from "../../shared/components/FormElements/Input";
// import Button from '@material-ui/core/Button';
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAX,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const SubjectItem = (props) => {
  const auth = useContext(AuthContext);
  const user = auth.userId;
  const role = auth.role;
  const [openTab, setOpenTab] = React.useState(1);
  const [mempack, setMempack] = React.useState("");

  const history = useHistory();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [open1, setOpen1] = React.useState(false);
  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const [formState, InputHandler] = useForm(
    {
      paidamount: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const confirmDeleteHandler1 = async () => {
    setOpen1(false);
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/books/deleteSubject/${props.id}`,
        "DELETE"
      );
      window.location.reload(false);
      props.onDelete(props.id);
    } catch (err) {}
  };

  const [open2, setOpen2] = React.useState(false);
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const [open4, setOpen4] = React.useState(false);
  const handleClickOpen4 = () => {
    setOpen4(true);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };



  const [open5, setOpen5] = React.useState(false);
  const handleClickOpen5 = () => {
    setOpen5(true);
  };

  const handleClose5 = () => {
    setOpen5(false);
  };

  const confirmDeleteHandler2 = async () => {
    setOpen2(false);
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/books/deleteSubject/${props.id}`,
        "DELETE"
      );
      window.location.reload(false);
      props.onDelete(props.id);
    } catch (err) {}
  };

  const chapterSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      // console.log(formData.urlName);
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/gym/payregistrationfee/${props.id}`,
        "POST",
        JSON.stringify({
          paidamount: formState.inputs.paidamount.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );

      // Redirect the  user to a different page
      history.push(`/gym/${props.id}`);
      window.location.reload(false);
      setOpen2(false);
    } catch (err) {}
  };

  const [open3, setOpen3] = React.useState(false);
  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const [paid, setPaid] = React.useState();

  const [rem, setRem] = React.useState();

  const chapterSubmitHandler1 = async (event) => {
    event.preventDefault();
    try {
      // console.log(formData.urlName);
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/gym/paypackagefee/${paid}`,
        "POST",
        JSON.stringify({
          paidamount: formState.inputs.paidamount.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );

      // Redirect the  user to a different page
      history.push(`/gym/${props.id}`);
      window.location.reload(false);
      setOpen2(false);
    } catch (err) {}
  };

  const disablememberHandler = async (event) => {
    event.preventDefault();
    try {
      console.log(props.id);
      const o = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/gym/disablemember/${props.id}`,"GET");
      console.log(o);
      // Redirect the  user to a different page
      history.push(`/gym/${props.id}`);
      window.location.reload(false);
      setOpen5(false);
    } catch (err) {}
  };


  const messagesendingHandler = async (event) => {
    event.preventDefault();
    try {
      // console.log(formData.urlName);
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/messaging/individual`,
        "POST",
        JSON.stringify({
          recipient: props.phonenumber,
          textmessage: formState.inputs.textmessage.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );

      // Redirect the  user to a different page
      history.push(`/gym/${props.id}`);
      window.location.reload(false);
      setOpen4(false);
    } catch (err) {}
  };

  const [open0, setOpen0] = React.useState(false);
  const handleClickOpen0 = () => {
    setOpen0(true);
  };

  const handleClose0 = () => {
    setOpen0(false);
  };

  const confirmDeleteHandler0 = async () => {
    setOpen0(false);
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/gym/deletememberspackage/${mempack}`,
        "DELETE"
      );
      window.location.reload(false);
      props.onDelete(props.id);
    } catch (err) {}
  };

  let color = "light";
  // const dateofjoining= moment(props.dateofjoining).format('DD-MM-YYYY');

  return (
    <React.Fragment>
      <Dialog
        open={open0}
        onClose={handleClose0}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want to proceed and delete this member's package?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please note that it can't be undone thereafter.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button1 onClick={handleClose0} color="primary">
            Disagree
          </Button1>
          <Button1 onClick={confirmDeleteHandler0} color="primary" autoFocus>
            Agree
          </Button1>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">{"Account Transactions"}</DialogTitle>
        <DialogContent>
        {props.transaction.slice(0).reverse().map(Links => (  <DialogContentText id="alert-dialog-description">
        <Moment date={Links.dateofearning} format="MMMM D, YYYY "/> - {Links.earning} -  {Links.type}
          </DialogContentText>))}
        </DialogContent>
        <DialogActions>
         
        </DialogActions> */}
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
                  Date of Transaction
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Transaction Amount
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Transaction Type
                </th>
              </tr>
            </thead>
            <tbody>
              {props.transaction
                .slice(0)
                .reverse()
                .map((Links) => (
                  <tr>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <b>
                        {" "}
                        <Moment
                          date={Links.dateofearning}
                          format="MMM D, YYYY h:m a"
                        />
                      </b>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <b>
                        {" "}
                        <BiRupee className="font-semibold  text-lightBlue-900 inline-flex" />
                        {Links.earning}
                      </b>
                    </td>

                    {/* {(props.registrationfeestatus && packagefeestatus)? "done": "not done"}  */}
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <b>{Links.type}</b>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Dialog>

      <Dialog
        open={open2}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Remaining Amount due (Registration fee) -{" "}
          {props.registrationfee <= 500
            ? 500 - Number(props.registrationfee)
            : 0}
        </DialogTitle>

        <form
          className="place-form relative bg-white w-full mb-6 shadow-lg rounded"
          onSubmit={chapterSubmitHandler}
        >
          {isLoading && <LoadingSpinner asOverlay />}
          <Input
            id="paidamount"
            element="input"
            type="text"
            label="Amount"
            validators={[VALIDATOR_MINLENGTH(1)]}
            errorText="Please enter a valid Package Name."
            onInput={InputHandler}
          />

          <pre></pre>

          <button
            className="text-blueGray-500 bg-transparent border border-solid border-blueGray-500 hover:bg-blueGray-600 hover:text-white active:bg-blueGray-600 active:text-white font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            disabled={!formState.isValid}
            type="submit"
          >
            Pay
          </button>

          {/* <Button >Add Member</Button> */}
        </form>
      </Dialog>

      <Dialog
        open={open4}
        onClose={handleClose4}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Sending message to {props.fullname} [{props.phonenumber}]
        </DialogTitle>

        <form
          className="place-form relative bg-white w-full mb-6 shadow-lg rounded"
          onSubmit={messagesendingHandler}
        >
          {isLoading && <LoadingSpinner asOverlay />}
          <Input
            id="textmessage"
            element="input"
            type="text"
            label="Text Message"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid Valid Message."
            onInput={InputHandler}
          />

          <pre></pre>

          <button
            className="text-blueGray-500 bg-transparent border border-solid border-blueGray-500 hover:bg-blueGray-600 hover:text-white active:bg-blueGray-600 active:text-white font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            // disabled={!formState.isValid}
            type="submit"
          >
            Send
          </button>

          {/* <Button >Add Member</Button> */}
        </form>
      </Dialog>



      <Dialog
        open={open5}
        onClose={handleClose5}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure to disable the of {props.fullname} ?
        </DialogTitle>

        <form
          className="place-form relative bg-white w-full mb-6 shadow-lg rounded"
          onSubmit={disablememberHandler}
        >
          <button
            className="text-blueGray-500 bg-transparent border border-solid border-blueGray-500 hover:bg-blueGray-600 hover:text-white active:bg-blueGray-600 active:text-white font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
          >
            disable
          </button>
        </form>
      </Dialog>


      {/* <HelmetProvider>
        <Helmet>
        <title>Ncert Books | Solutions | PDF Downloads For Free | {props.keywords}</title>
        <meta
          name="keywords"
          content={props.keywords}
                  />
        <meta
          name="description"
          content={props.keywords}
                  />
         </Helmet>
         </HelmetProvider> */}

      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://ncertebooks.in/uploads/images/ef6eaa34-5c57-484e-81dd-a30fefb45e76.png')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      {props.gender === "male" ? (
                        <img
                          alt="..."
                          src={require("../assets/img/gymm.jpg")}
                          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                        />
                      ) : (
                        <img
                          alt="..."
                          src={require("../assets/img/gymf.jpg")}
                          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                        />
                      )}
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                    <button
                        className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleClickOpen5}
                      > disable profile
                        </button>

                      <button
                        className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleClickOpen1}
                      >
                        Transactions
                      </button>
                      <button
                        className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleClickOpen2}
                      >
                        Pay Registration Fee
                      </button>
                      <button
                        className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleClickOpen4}
                      >
                        Send message
                      </button>

                      <Link
                        to={`/addmemberpackages/${props.id}/`}
                        styles={(TextDecoder = "none")}
                      >
                        <button
                          className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          Add Member's Package
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      {/* <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          15
                        </span>
                        <span className="text-sm text-blueGray-400">
                         {props.fullname}'s Gym ID
                        </span>
                      </div> */}

                      {/* <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          10
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Photos
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          89
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Comments
                        </span>
                      </div> */}
                    </div>
                  </div>
                </div>

                <h3 className="text-4xl center font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  {props.fullname}
                </h3>
                <div className="container-sm">
                  <div className="row justify-content-around">
                    <div className="col-sm">
                      <div className="text mt-12">
                        {/* <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  {props.fullname}
                  </h3> */}
                        {/* <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                    {props.address}
                  </div> */}
                        <div className="mb-2 text-blueGray-600">
                          <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                          Address - {props.address}
                        </div>
                        {/* <div className="mb-2 text-blueGray-600 mt-10"> */}
                        <div className="mb-2 text-blueGray-600 ">
                          {/* <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i> */}
                          <HiOutlineMailOpen className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
                          Email - {props.email}
                        </div>
                        <div className="mb-2 text-blueGray-600">
                          <FaBirthdayCake className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
                          Date of Birth -{" "}
                          <Moment
                            date={props.dateofbirth}
                            format="MMMM D, YYYY "
                          />
                        </div>
                        <div className="mb-2 text-blueGray-600">
                          <FaBirthdayCake className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
                          Registration Fee -{" "}
                          {props.registrationfee >= 500 ? (
                            <font color="white" className="bg-success rounded ">
                              &nbsp; Fully Paid{" "}
                              <BiRupee className="fas  text-lg text-red-400" />
                              {props.registrationfee}&nbsp;
                            </font>
                          ) : (
                            <font color="white" className="bg-danger rounded">
                              &nbsp; Partially Paid{" "}
                              <BiRupee className="fas text-lg text-red-400" />
                              {props.registrationfee}&nbsp;
                            </font>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-sm">
                      <div className="text mt-12">
                        {/* <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  {props.fullname}
                  </h3> */}
                        {/* <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                    {props.address}
                  </div> */}
                        <div className="mb-2 text-blueGray-600">
                          {/* <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i> */}
                          <MdPermPhoneMsg className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                          Contact - (+91)-{props.phonenumber}
                        </div>
                        {/* <div className="mb-2 text-blueGray-600 mt-10"> */}
                        <div className="mb-2 text-blueGray-600 ">
                          {/* <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i> */}
                          <SiGravatar className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
                          Gender - {props.gender}
                        </div>
                        <div className="mb-2 text-blueGray-600">
                          <FaHandshake className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
                          Date of joining -{" "}
                          <Moment
                            date={props.dateofjoining}
                            format="MMMM D, YYYY "
                          />
                        </div>
                        <div className="mb-2 text-blueGray-600">
                          <FaHandshake className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
                          Weight - {props.weight}
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <h3 className="text-4xl center font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  Packages
                  </h3>
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                 
                      </p>
                      <a
                        href="#pablo"
                        className="font-normal text-lightBlue-500"
                        onClick={(e) => e.preventDefault()}
                      >
                        Show more
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      Thanks, {props.fullname} for making this Xtreme Gym family
                      more big.
                    </p>
                    <a
                      href="#pablo"
                      className="font-normal text-lightBlue-500"
                      onClick={(e) => e.preventDefault()}
                    >
                      Show more
                    </a>
                  </div>
                </div>
              </div>
              <div className="align-left">
                <Link to={`/update/${props.id}`}>
                  {" "}
                  <button
                    className="bg-orange-500 active:bg-orange-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <MdModeEdit className="fas fa-briefcase mr-2 text-lg text-white-400" />
                  </button>
                </Link>
              </div>
            </div>

            {/* <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-lightBlue-600"
                    : "text-lightBlue-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Profile
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-lightBlue-600"
                    : "text-lightBlue-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Settings
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <h3 className="text-4xl center font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  Packages
                  </h3>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </> */}

            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className="block" id="link1">
                  <h3 className="text-4xl center font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    Packages
                  </h3>
                </div>
              </div>
            </div>

            {/* All package Block map */}
            {props.packages
              .slice(0)
              .reverse()
              .map((Links) => (
                <React.Fragment>
                  <Dialog
                    open={open3}
                    onClose={handleClose3}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      Remaining Amount due (Package fee) - {rem}
                    </DialogTitle>

                    <form
                      className="place-form relative bg-white w-full mb-6 shadow-lg rounded"
                      onSubmit={chapterSubmitHandler1}
                    >
                      {isLoading && <LoadingSpinner asOverlay />}
                      <Input
                        id="paidamount"
                        element="input"
                        type="text"
                        label="Amount"
                        validators={[VALIDATOR_MINLENGTH(1)]}
                        errorText="Please enter a valid Package Name."
                        onInput={InputHandler}
                      />

                      <pre></pre>

                      <button
                        className="text-blueGray-500 bg-transparent border border-solid border-blueGray-500 hover:bg-blueGray-600 hover:text-white active:bg-blueGray-600 active:text-white font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        disabled={!formState.isValid}
                        type="submit"
                      >
                        Pay
                      </button>

                      {/* <Button >Add Member</Button> */}
                    </form>
                  </Dialog>

                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full  shadow-lg rounded">
                    {/* Package Heading */}
                    <div className="text-white bg-lightBlue-600 text-xs font-bold uppercase px-5 py-3  rounded block leading-normal ">
                      <b className="capitalize">Package Name -</b>{" "}
                      {Links.packagename}
                    </div>

                    <div className="flex flex-wrap ">
                      <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                        <div className="py-6 px-3 mt-32 sm:mt-0">
                          {Links.expirydate > new Date().toISOString() ? (
                            <button
                              className="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                              type="button"
                            >
                              Active
                            </button>
                          ) : (
                            <button
                              className="bg-red-500 active:bg-red-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                              type="button"
                            >
                              Expired
                            </button>
                          )}

                          <button
                            className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={handleClickOpen3}
                            onMouseEnter={() => {
                              setRem(
                                Links.packagecost - Links.amountpaid <=
                                  Links.packagecost
                                  ? Number(Links.packagecost) -
                                      Number(Links.amountpaid)
                                  : 0
                              );
                              setPaid(Links._id);
                            }}
                          >
                            Pay Package Fee
                          </button>

                          {Links.packagefeestatus === true ? (
                            <button
                              className="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                              type="button"
                            >
                              Fee Done
                            </button>
                          ) : (
                            <button
                              className="bg-red-500 active:bg-red-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                              type="button"
                            >
                              Fee Pending
                            </button>
                          )}
                        </div>
                      </div>

                      {/* <div className="w-full lg:w-4/12 px-4 lg:order-1">
                   
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          22
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Days Left
                        </span>
                     
                    
                     
                    </div>
                  </div> */}
                    </div>

                    <div className="px-4 py-5 flex-auto">
                      <div className="tab-content tab-space">
                        <div className="block" id="link1">
                          {/* Package Body */}

                          <div className="mb-2 text-blueGray-600 ">
                            <HiOutlineMailOpen className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
                            <b>Package Name</b> - {Links.packagename}
                          </div>

                          <div className="mb-2 text-blueGray-600 ">
                            <HiOutlineMailOpen className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
                            <b>Package Duration</b> - {Links.packagemonth}{" "}
                            Months
                          </div>

                          <div className="mb-2 text-blueGray-600 ">
                            <HiOutlineMailOpen className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
                            <b>Package Fee</b> -{" "}
                            <BiRupee className="fas text-lg text-red-400" />
                            {Number(Links.packagecost) + Number(Links.discount)}
                          </div>
                          <div className="mb-2 text-blueGray-600 ">
                            <HiOutlineMailOpen className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
                            <b>Package fee after Discount </b> -{" "}
                            <BiRupee className="fas text-lg text-red-400" />
                            {Links.packagecost}
                          </div>

                          <div className="mb-2 text-blueGray-600 ">
                            <HiOutlineMailOpen className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
                            <b>Discount Offered</b> -{" "}
                            <BiRupee className="fas text-lg text-red-400" />
                            {Links.discount}
                          </div>

                          <div className="mb-2 text-blueGray-600">
                            <HiOutlineMailOpen className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
                            <b>Package Fee Remaining</b> -{" "}
                            <BiRupee className="fas text-lg text-blueGray-400" />
                            {Links.packagecost - Links.amountpaid}
                          </div>

                          <div className="mb-2 text-blueGray-600 ">
                            <HiOutlineMailOpen className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
                            <b>Package Start Date </b>-{" "}
                            <Moment
                              date={Links.startingdate}
                              format="MMM D, YYYY "
                            />
                          </div>

                          <div className="mb-2 text-blueGray-600 ">
                            <HiOutlineMailOpen className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
                            <b>Package Expiration Date </b>-{" "}
                            <Moment
                              date={Links.expirydate}
                              format="MMM D, YYYY "
                            />
                          </div>

                          <div className="flex flex-wrap">
                            <div className="w-full">
                              <ul
                                className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                                role="tablist"
                              >
                                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                  <a
                                    className={
                                      "text-xs font-bold uppercase px-5 py-3  rounded block leading-normal text-decoration-none " +
                                      (openTab === 1
                                        ? "text-white bg-lightBlue-600"
                                        : "text-lightBlue-600 bg-white")
                                    }
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setOpenTab(1);
                                    }}
                                    data-toggle="tab"
                                    href={`#link1${Links._id}`}
                                    role="tablist"
                                  >
                                    Package Description
                                  </a>
                                </li>
                                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                  <a
                                    className={
                                      "text-xs font-bold uppercase px-5 py-3  rounded block leading-normal text-decoration-none  " +
                                      (openTab === 2
                                        ? "text-white bg-lightBlue-600"
                                        : "text-lightBlue-600 bg-white")
                                    }
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setOpenTab(2);
                                    }}
                                    data-toggle="tab"
                                    href={`#link2${Links._id}`}
                                    role="tablist"
                                  >
                                    Notes
                                  </a>
                                </li>
                              </ul>
                              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded">
                                <div className="px-4 py-5 flex-auto">
                                  <div className="tab-content tab-space">
                                    <div
                                      className={
                                        openTab === 1 ? "block" : "hidden"
                                      }
                                      id={`#link1${Links._id}`}
                                    >
                                      <p>{Links.packagedescription}</p>
                                    </div>
                                    <div
                                      className={
                                        openTab === 2 ? "block" : "hidden"
                                      }
                                      id={`#link2${Links._id}`}
                                    >
                                      <p>
                                        Here you should add your Bill data
                                        (comments/note). Funtionality will be
                                        added soon!
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-align-right">
                        {auth.role === "admin" && (
                          <button
                            className="bg-red-500 active:bg-red-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={handleClickOpen0}
                            onMouseEnter={() => setMempack(Links._id)}
                          >
                            <MdDelete className="fas fa-briefcase mr-2 text-lg text-white-400" />
                          </button>
                        )}
                        {/* <button
                        className="bg-orange-500 active:bg-orange-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        <MdModeEdit className="fas fa-briefcase mr-2 text-lg text-white-400" />
                      </button> */}
                      </div>
                    </div>
                  </div>

                  <pre> </pre>
                  <pre> </pre>
                  <pre> </pre>
                </React.Fragment>
              ))}
          </div>
        </section>
      </main>

      {/* <div className="user-item"> */}

      {/* <Card className="user-item__content">
            <Link to={`/books/chapters/${props.id}`}>
            <div className="user-item__image">
                <Avatar image={`${process.env.REACT_APP_ASSET_URL}/${props.image}`} alt={props.subjectName} />
            </div>
            <div className="user-item__info">
           <b> <Typography gutterBottom variant="body2">{props.subjectName}</Typography></b>
            <Typography variant="body2" gutterBottom>{props.chaptersCount} {props.chaptersCount === 1 ? 'Chapter' : 'Chapters'}
            </Typography>

            </div>
            <div className="user-item__imageL">
                <Avatar image={`https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png`} alt={props.classNo} />
            </div>
        </Link>
    
        </Card>
        */}
      {/* {props.fullname}
        {props.gender}
        {props.email}
        {props.phonenumber}
        {props.dateofjoining}
        {props.dateofbirth}
        {props.address}
        {props.trainingtype}
     */}
      {/* </div> */}
      {/* { auth.role === 'admin'  &&  (<div className="user-item1">
            <Link to={`/books/updatesubject/${props.id}`}><button className="button">Edit</button></Link>
               <button className="button" danger onClick={handleClickOpen1}>Delete</button>
                </div>)} */}
    </React.Fragment>
  );
};

export default SubjectItem;
