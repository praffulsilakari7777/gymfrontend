import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "../components/Navbars/AdminNavbar";
import Sidebar from "../components/Sidebar/Sidebar";
import HeaderStats from "../components/Headers/HeaderStats";
import FooterAdmin from "../components/Footers/FooterAdmin";

// views

import Dashboard from "./dashboard";
import Maps from "../views/admin/Maps";
import Settings from "../views/admin/Settings";
import Tables from "../views/admin/Tables";
import AddMember from "./AddMember";
import AllMembers from "./AllMembers";

export default function Admin() {
  return (
    <React.Fragment>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            {/* <Route path="/admin" exact><Dashboard /></Route> */}
            <Route path="/admin/dashboard" exact><Dashboard /></Route>
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            <Route path="/admin/addmember" exact component={AddMember} />
            <Route path="/admin/allmembers" exact component={AllMembers} />
            <Redirect from="/admin" to="/admin" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
      </React.Fragment>
  );
}
