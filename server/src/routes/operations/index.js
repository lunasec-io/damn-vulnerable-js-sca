import express from 'express'

import auth from '../../core/auth.js'

import exploitCVE202121315 from './exploitCVE202121315.js'
import exploitCVE20134660 from './exploitCVE20134660.js'
import exploitCVE202236067 from './exploitCVE202236067.js'

const router = express.Router()

router.post('/exploit-cve202121315',  auth,  exploitCVE202121315)
router.post('/exploit-cve20134660',  auth,  exploitCVE20134660)
router.post('/exploit-cve202236067',  auth,  exploitCVE202236067)

export default router
