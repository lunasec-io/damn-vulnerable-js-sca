import express from 'express'

import auth from '../../core/auth.js'

import exploitCVE202121315 from './exploitCVE202121315.js'
import exploitCVE20134660 from './exploitCVE20134660.js'
import exploitCVE202236067 from './exploitCVE202236067.js'
import exploitCVE20195786 from './exploitCVE20195786.js'
import exploitCVE202011023 from './exploitCVE202011023.js'
import exploitCVE201716082 from './exploitCVE201716082.js'
import exploitCVE201910759 from './exploitCVE201910759.js'

const router = express.Router()

router.post('/exploit-cve202121315',  auth,  exploitCVE202121315)
router.post('/exploit-cve20134660',  auth,  exploitCVE20134660)
router.post('/exploit-cve202236067',  auth,  exploitCVE202236067)
router.post('/exploit-cve20195786',  auth,  exploitCVE20195786)
router.post('/exploit-cve202011023',  auth,  exploitCVE202011023)
router.post('/exploit-cve201716082',  auth,  exploitCVE201716082)
router.post('/exploit-cve201910759',  auth,  exploitCVE201910759)

export default router
