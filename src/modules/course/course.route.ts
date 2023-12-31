import { Router } from "express";
import { validateRequest } from "../../middleware/validateRequest";
import { createCourseSchemaValidation, updateCourseSchemaValidation } from "./course.validation";
import { CourseController } from "./course.controller";

const router = Router();

router.post('/course',
    validateRequest(createCourseSchemaValidation), CourseController.createCourseIntoDB);

router.get('/courses', CourseController.getAllCourseFromDB)

router.patch('/courses/:courseId',
    validateRequest(updateCourseSchemaValidation), CourseController.updateCourseIntoDB)

export const CourseRouter = router;