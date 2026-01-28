import { Hono } from 'hono';
import {
  getStudents,
  getStudentById, // ✅ now this exists
  createStudent,
  updateStudent,
  deleteStudent
} from './students.controller.js';

const router = new Hono();

router.get('/', getStudents);          
router.get('/:id', getStudentById);   // GET student by ID
router.post('/', createStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

export default router;
