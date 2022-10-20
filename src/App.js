import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './user/pages/user';
import Books from './Books/pages/Class';
import Pages from './Pages/pages/Pages';
// import UpdateBlock from './Pages/pages/UpdateBlock';
import PageInfo from './Pages/pages/PageInfo';
import CreatePage from './Pages/pages/CreatePage';
import CreateBlock from './Pages/pages/CreateBlock';
import CreateLink from './Pages/pages/CreateLink';
import Dashboard from './Gym/pages/dashboard';
// import Subjects from './Books/pages/Subject';
// import Chapters from './Books/pages/Chapter';
// import CreateClass from './Books/pages/CreateClass';
// import UpdateChapter from './Books/pages/UpdateChapter';
// import UpdateSubject from './Books/pages/UpdateSubject';
// import CreateSubject from './Books/pages/CreateSubject';
// import UserBooks from './Books/pages/UserBooks';
// import CreateChapter from './Books/pages/CreateChapter';
import NewPlaces from './places/pages/NewPlaces';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import PDF from './places/pages/PDF';
import PDFSol from './places/pages/PDFSol';
import PDFMat from './places/pages/PDFMat';
import Auth from './user/pages/Auth';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';
import SinglePagePDFViewer from "./components/pdf/single-page";
import AllPagesPDFViewer from "./components/pdf/all-pages";
import samplePDF from "./sample.pdf";
import { useAuth } from './shared/hooks/auth-hook';
import LoadingSpinner from './shared/components/UIElements/LoadingSpinner';
import Maps from "./Gym/views/admin/Maps";
import Settings from "./Gym/views/admin/Settings";
import Tables from "./Gym/views/admin/Tables";

const Blocks = React.lazy(() => import('./Pages/pages/Blocks'));
const Subjects = React.lazy(() => import('./Books/pages/Subject'));
const Chapters = React.lazy(() => import('./Books/pages/Chapter'));
const CreateClass = React.lazy(() => import('./Books/pages/CreateClass'));
const UpdateSubject = React.lazy(() => import('./Books/pages/UpdateSubject'));
const CreateSubject = React.lazy(() => import('./Books/pages/CreateSubject'));
const UpdateChapter = React.lazy(() => import('./Books/pages/UpdateChapter'));
const UserBooks = React.lazy(() => import('./Books/pages/UserBooks'));
const CreateChapter = React.lazy(() => import('./Books/pages/CreateChapter'));
const UpdateBlock = React.lazy(() => import('./Pages/pages/UpdateBlock'));
const MainPage = React.lazy(() => import('./Pages/pages/MainPage'));
const MainPageInfo = React.lazy(() => import('./Pages/pages/MainPageInfo'));
const UpdateLink = React.lazy(() => import('./Pages/pages/UpdateLink'));
const UpdatePage = React.lazy(() => import('./Pages/pages/UpdatePage'));

const Categories = React.lazy(() => import('./Categories/pages/categories'));
const Materials = React.lazy(() => import('./Categories/pages/materials'));
const CreateCategories = React.lazy(() => import('./Categories/pages/createCategories'));
const CreateMaterials = React.lazy(() => import('./Categories/pages/createMaterials'));

const AllMembers = React.lazy(() => import('./Gym/pages/AllMembers'));
const AddMember = React.lazy(() => import('./Gym/pages/AddMember'));
const AddPackage = React.lazy(() => import('./Gym/pages/AddPackage'));
const Member = React.lazy(() => import('./Gym/pages/member'));
const LandingPage = React.lazy(() => import('./Gym/pages/LandingPage'));
const AddMemberPackages = React.lazy(() => import('./Gym/pages/AddMemberPackages'));
const Admin = React.lazy(() => import('./Gym/pages/Admin'));
const Earnings = React.lazy(() => import('./Gym/pages/Earnings'));
const AllPackages = React.lazy(() => import('./Gym/pages/AllPackages'));
const UpdateMember = React.lazy(() => import('./Gym/pages/updateMember'));
const UpdatePackage = React.lazy(() => import('./Gym/pages/updatePackage'));
const UpdateUser = React.lazy(() => import('./user/pages/updateUser'));
const Query = React.lazy(() => import('./Gym/pages/AllQuerys'));



const  App = () => {
 const { token, login, logout, userId, role } =  useAuth();

  let routes;

  if (token) {
    if(role==='admin'){
      routes = (
      <Switch>
        
        <Route path="/allquery" exact><Query /></Route>
        
    <Route path="/update/:mid" exact><UpdateMember /></Route>
        <Route path="/users" exact><Users /></Route>
        <Route path="/updateuser/:uid" exact><UpdateUser /></Route>
      <Route path="/gym/:mid" ><Member /></Route>
    <Route path="/ad" exact><Admin /></Route>
    <Route path="/addmemberpackages/:mid" ><AddMemberPackages /></Route>
    <Route path="/members" exact><AllMembers /></Route>
    <Route path="/earnings" exact><Earnings /></Route>
    
    <Route path="/dashboard" exact><Dashboard /></Route>
    <Route path="/admin"><Admin /></Route>
    <Route path="/addmember" exact><AddMember /></Route>
    <Route path="/updatepackage/:paid" exact><UpdatePackage /></Route>
    <Route path="/addpackage" exact><AddPackage /><AllPackages /></Route>
    <Route path="/:pid" ><PageInfo /><Blocks /></Route>
    
    
    <Route path="/" exact><LandingPage /></Route>
   
    {/* <Route path="/" exact><LandingPage /></Route> */}

<Redirect to="/" />
    </Switch>);
    }




  else if(role==='employee'){
      routes = (
      <Switch>
        
        <Route path="/allquery" exact><Query /></Route>
        <Route path="/allpackage" exact><AllPackages /></Route>
        <Route path="/update/:mid" exact><UpdateMember /></Route>
        <Route path="/users" exact><Users /></Route>
        {/* <Route path="/updateuser/:uid" exact><UpdateUser /></Route> */}
        <Route path="/gym/:mid" ><Member /></Route>
       {/* <Route path="/ad" exact><Admin /></Route> */}
       <Route path="/addmemberpackages/:mid" ><AddMemberPackages /></Route>
       <Route path="/members" exact><AllMembers /></Route>
        {/* <Route path="/earnings" exact><Earnings /></Route> */}
       <Route path="/dashboard" exact><Dashboard /></Route>
       {/* <Route path="/admin"><Admin /></Route> */}
       <Route path="/addmember" exact><AddMember /></Route>
       <Route path="/addpackage" exact><AddPackage /><AllPackages /></Route>
       {/* <Route path="/updatepackage/:paid" exact><UpdatePackage /></Route> */}
       {/* <Route path="/addpackage" exact><AddPackage /><AllPackages /></Route> */}
       {/* <Route path="/:pid" ><PageInfo /><Blocks /></Route> */}
    
    
    <Route path="/" exact><LandingPage /></Route>
   
    {/* <Route path="/" exact><LandingPage /></Route> */}

<Redirect to="/" />
    </Switch>);
    }


    else {
    routes = (
      <Switch>

      {/* <Route path="/" exact><MainPageInfo /><MainPage /></Route> */}


      {/* <Route path="/user/auth"><Auth /></Route> */}
    {/* <Route path="/gym/:mid" exact><Member /></Route> */}
    {/* <Route path="/ad" exact><Admin /></Route>
    <Route path="/addmemberpackages/:mid" exact><AddMemberPackages /></Route>
    <Route path="/members" exact><AllMembers /></Route>
    <Route path="/earnings" exact><Earnings /></Route> */}
    {/* <Route path="/" exact><LandingPage /></Route> */}
    {/* <Route path="/dashboard" exact><Dashboard /></Route>
    <Route path="/admin"><Admin /></Route>
    <Route path="/addmember" exact><AddMember /></Route>
    <Route path="/addpackage" exact><AddPackage /></Route>
    <Route path="/:pid" exact><PageInfo /><Blocks /></Route> */}


    <Route path="/" exact><LandingPage /></Route>
      <Redirect to="/" />
   </Switch>
     );
    }
  } else { 
    routes = (
      <Switch>



    <Route path="/allquery" exact>{(role==='admin' || role==='employee')? <Query />:<LandingPage />}</Route>
    <Route path="/users" exact>{(role==='admin' || role==='employee')?<Users />:<LandingPage />}</Route>
    <Route path="/updateuser/:uid" exact>{(role==='admin' || role==='employee')?<UpdateUser />:<LandingPage />}</Route>
    {/* <Route path="/user/auth"><Auth /></Route> */}
    <Route path="/gym/:mid" exact>{(role==='admin' || role==='employee')?<Member />:<LandingPage />}</Route>
    {/* <Route path="/ad" exact><Admin /></Route> */}
    <Route path="/addmemberpackages/:mid" exact>{(role==='admin' || role==='employee')?<AddMemberPackages />:<LandingPage />}</Route>
    <Route path="/members" exact>{(role==='admin' || role==='employee')?<AllMembers />:<LandingPage />}</Route>
    <Route path="/earnings" exact>{(role==='admin' || role==='employee')?<Earnings />:<LandingPage />}</Route>
    {/* <Route path="/" exact><LandingPage /></Route> */}
    {/* <Route path="/dashboard" exact><Dashboard /></Route> */}
    {/* <Route path="/admin"><Admin /></Route> */}
    <Route path="/addmember" exact>{(role==='admin' || role==='employee')?<AddMember />:<LandingPage />}</Route>
    <Route path="/addpackage" exact>{(role==='admin' || role==='employee')?(<><AddPackage /><AllPackages /></>):<LandingPage />}</Route>
    <Route path="/allpackage" exact>{(role==='admin' || role==='employee')?<AllPackages />:<LandingPage />}</Route>
    <Route path="/update/:mid" exact>{(role==='admin' || role==='employee')?<UpdateMember />:<LandingPage />}</Route>
    <Route path="/updatepackage/:paid" exact>{(role==='admin' || role==='employee')?<UpdatePackage />:<LandingPage />}</Route>



{/* 
<Route path="/allquery" exact><Redirect to='/' /></Route>
    <Route path="/users" exact><Redirect to='/' /></Route>
    <Route path="/updateuser/:uid" exact><Redirect to='/' /></Route>
   
    <Route path="/gym/:mid" exact><Redirect to='/' /></Route>
    <Route path="/ad" exact><Redirect to='/' /></Route>
    <Route path="/addmemberpackages/:mid" exact><Redirect to='/' /></Route>
    <Route path="/members" exact><Redirect to='/' /></Route>
    <Route path="/earnings" exact><Redirect to='/' /></Route>
   
    <Route path="/dashboard" exact><Redirect to='/' /></Route>
    <Route path="/admin"><Redirect to='/' /></Route>
    <Route path="/addmember" exact><Redirect to='/' />></Route>
    <Route path="/addpackage" exact><Redirect to='/' /><AllPackages /></Route>
    <Route path="/allpackage" exact><Redirect to='/' /></Route>
    <Route path="/:pid" exact><PageInfo /><Redirect to='/' /></Route>
    <Route path="/update/:mid" exact><Redirect to='/' /></Route>
    <Route path="/updatepackage/:paid" exact><Redirect to='/' /></Route> */}
    

    
    <Route path="/" exact><LandingPage /></Route>
    <Route path="/user/auth"><Auth /></Route>
    

 {/* Not found pages get redirected to this */}
   <Redirect to="/" />

   </Switch>
     )
  }

  return (
    <AuthContext.Provider value={{isLoggedIn: !!token, token: token, role: role, userId: userId, login: login, logout: logout }}>
  <Router>
<MainNavigation />
<main><Suspense fallback={<div className="center"><LoadingSpinner /></div>}>
      {routes}
      </Suspense>
   </main>
  </Router>
  </AuthContext.Provider>
  );
};
export default App;
