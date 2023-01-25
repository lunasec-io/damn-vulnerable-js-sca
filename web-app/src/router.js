import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import createAuthRequiredPage from "./auth/pages/createAuthRequiredPage.js"

import MainPage from "./ext-src/MainPage"
import CVE202121315Page from "./ext-src/vulnerability/CVE202121315Page"
import CVE20134660Page from "./ext-src/vulnerability/CVE20134660Page"
import CVE202236067Page from "./ext-src/vulnerability/CVE202236067Page"
import CVE20195786Page from "./ext-src/vulnerability/CVE20195786Page"
import CVE202011023Page from "./ext-src/vulnerability/CVE202011023Page"
import CVE201716082Page from "./ext-src/vulnerability/CVE201716082Page"
import CVE201910759Page from "./ext-src/vulnerability/CVE201910759Page"


const router = (
  <Router>
    <div>
      <Route exact path="/" component={ MainPage }/>
      <Route exact path="/vulnerability/cve-2021-21315" component={ CVE202121315Page }/>
      <Route exact path="/vulnerability/cve-2013-4660" component={ CVE20134660Page }/>
      <Route exact path="/vulnerability/cve-2022-36067" component={ CVE202236067Page }/>
      <Route exact path="/vulnerability/cve-2019-5786" component={ CVE20195786Page }/>
      <Route exact path="/vulnerability/cve-2020-11023" component={ CVE202011023Page }/>
      <Route exact path="/vulnerability/cve-2017-16082" component={ CVE201716082Page }/>
      <Route exact path="/vulnerability/cve-2019-10759" component={ CVE201910759Page }/>

    </div>
  </Router>
)

export default router
