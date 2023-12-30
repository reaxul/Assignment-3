import { Router } from "express";
import { validateRequest } from "../../middleware/validateRequest";
import { createCourseSchemaValidation } from "./course.validation";
import { CourseController } from "./course.controller";

const router = Router();

router.post('/course',
    validateRequest(createCourseSchemaValidation), CourseController.createCourseIntoDB);

router.get('/courses', CourseController.getAllCourseFromDB)

export const CourseRouter = router;