import React from 'react';
// noinspection ES6CheckImport
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage";
import RegistrationPage from "./pages/registration-page/registration-page";
import AboutPage from "./pages/about-page/about-page";
import Navbar4 from "./components/navbar/navbar4";
import PackagePage from "./pages/package-page/package-page";


function App() {

   return (
      <>
         <Navbar4/>
         <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/register' component={RegistrationPage}/>
            <Route path='/contact' component={AboutPage}/>
            <Route path='/packages' component={PackagePage}/>
         </Switch>
      </>
   );
}


export default App;
