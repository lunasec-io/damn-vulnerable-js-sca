import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import createAuthRequiredPage from "./auth/pages/createAuthRequiredPage.js"

import MainPage from "./ext-src/MainPage"
import CVE202121315Page from "./ext-src/vulnerability/CVE202121315Page"


const router = (
  <Router>
    <div>
      <Route exact path="/" component={ MainPage }/>
      <Route exact path="/vulnerability/cve-2021-21315" component={ CVE202121315Page }/>

    </div>
  </Router>
)

export default router
