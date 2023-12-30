import { getQuery } from "../../helper/queryHelper";
import TQueryObj from "../../types/TQueryObj";
import { ICourse } from "./course.interface";
import { Course } from "./course.model";

const createCourseIntoDB = async (payload: ICourse): Promise<ICourse> => {
    const result = await Course.create(payload);
    return result;
};
  
const getAllCourseFromDB = async (query: TQueryObj): Promise<ICourse[]> => {
    const result = await getQuery(Course.find(), query);
    return result;
};
  
export const CourseServices = {
    createCourseIntoDB,
    getAllCourseFromDB,
}