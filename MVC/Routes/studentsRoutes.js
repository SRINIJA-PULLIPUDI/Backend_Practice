import express from 'express'
import getStudents from '../Controllers/studentsControllers.js';
// import {getStudents, addStudents} from '../Controllers/studentsControllers.js';
const router = express.Router();
router.get('/get',getStudents);
// router.post('/add-student',addStudents);
export default router;