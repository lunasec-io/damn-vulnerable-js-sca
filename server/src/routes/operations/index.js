import express from 'express'

import auth from '../../core/auth.js'

import exploitCVE202121315 from './exploitCVE202121315.js'

const router = express.Router()

router.post('/exploit-cve202121315',  auth,  exploitCVE202121315)

export default router
