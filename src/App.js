import Login from './pages/login/login';
import {useEffect, useState} from 'react';
import Admin from './pages/admin/Admin';
import User from './pages/user/User';
import NotFound from './pages/NotFound/NotFound';
import RedirectUser from './pages/redirect/redirect';
import Private from './Components/PrivateRoute/PrivateRoute';

import { HashRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Create from './pages/Create/Create';
import Update from './pages/Update/Update';
import Owned from './pages/Owned/Owned';
import {ownedServices} from './services/ownerServices';
import Allowned from './Components/Post/Allpost/Allpost';
// import {  } from ''

function App() {
  
  
  
  return (
    <HashRouter>
      <Routes>        
        <Route path="/login" element={<Login />} />
        
        <Route path="/redirect" element={<RedirectUser />}/>
        
        <Route path="/admin"  element={<Private role="admin"><Admin /></Private>} />
        <Route path="/user"   element={<Private role="user"> <Allowned /> </Private>} />
        <Route path="/Create"  element={<Private role="admin"><Create /></Private>} />
        <Route path="/Update"  element={<Private role="admin"><Update /></Private>} />
        <Route path="/Owned"  element={<Private role="admin"><Owned  /></Private>} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;