import React from 'react';
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage";
import RegistrationPage from "./pages/registration-page/registration-page";
import AboutPage from "./pages/about-page/about-page";
import Navbar4 from "./components/navbar/navbar4";


function App() {

   return (
      <>
         <Navbar4/>
         <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/register' component={RegistrationPage}/>
            <Route path='/about' component={AboutPage}/>
         </Switch>
      </>
   );
}


export default App;
