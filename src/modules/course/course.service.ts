import { ICourse } from "./course.interface";
import { Course } from "./course.model";

const createCourseIntoDB = async (payload: ICourse): Promise<ICourse> => {
    const result = await Course.create(payload);
    return result;
};
  
export const CourseServices = {
    createCourseIntoDB,
}