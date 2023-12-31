import { object } from "zod";
import { getQuery } from "../../helper/queryHelper";
import IQueryObj from "../../types/IQueryObj";
import { ICourse } from "./course.interface";
import { Course } from "./course.model";

const createCourseIntoDB = async (payload: ICourse): Promise<ICourse> => {
    const result = await Course.create(payload);
    return result;
};

const getAllCourseFromDB = async (query: IQueryObj): Promise<ICourse[]> => {
    const result = await getQuery(Course.find(), query);
    return result;
};

const updateCourseIntoDB = async (id: string, payload: Partial<ICourse>): Promise<ICourse | null> => {
    const { tags, details, ...rest } = payload;
    const modifiedPayload: Record<string, unknown> = { ...rest };
    if (tags && tags.length) {
        const newTags = tags.filter((tag) => !tag.isDeleted);
        await Course.findByIdAndUpdate(id, { $addToSet: { tags: { $each: newTags } } });
    }

    const removeTags = tags?.filter((tag) => tag.isDeleted).map((tag) => tag.name);

    await Course.findByIdAndUpdate(id, { $pull: { tags: { name: { $in: removeTags } } } });

    if (details && Object.keys(details).length) {
        for (const [key, value] of Object.entries(details)) {
            modifiedPayload[`details.${key}`] = value;
        }

    }
    const result = await Course.findByIdAndUpdate(id, modifiedPayload, { new: true, runValidators: true });
    return result;
}

export const CourseServices = {
    createCourseIntoDB,
    getAllCourseFromDB,
    updateCourseIntoDB,
}