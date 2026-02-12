import { Hono } from 'hono';
import {
  getStudents,
  getStudentById, 
  createStudent,
  updateStudent,
  deleteStudent
} from './students.controller.js';

const router = new Hono();

router.get('/', getStudents);          
router.get('/:id', getStudentById);   
router.post('/', createStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

export default router;
