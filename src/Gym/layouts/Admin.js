import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "../components/Navbars/AdminNavbar";
import Sidebar from "../components/Sidebar/Sidebar";
import HeaderStats from "../components/Headers/HeaderStats";
import FooterAdmin from "../components/Footers/FooterAdmin";

// views

// import Dashboard from "../views/admin/Dashboard.js";
import Maps from "../views/admin/Maps.js";
import Settings from "../views/admin/Settings.js";
import Tables from "../views/admin/Tables.js";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            {/* <Route path="/admin/dashboard" exact component={Dashboard} /> */}
            <Route path="/ad/maps" exact component={Maps} />
            <Route path="/ad/settings" exact component={Settings} />
            <Route path="/ad/tables" exact component={Tables} />
            <Redirect from="/ad" to="/ad" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
