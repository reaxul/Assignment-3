import { Router } from "express";
import { CourseRouter } from "../../modules/course/course.route";

const router = Router();

const routes = [
  {
    path: "/",
    route: CourseRouter,
  },
];

routes.forEach(el => router.use(el.path, el.route));

export const globalRouter = router;