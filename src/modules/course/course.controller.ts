import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { CourseServices } from "./course.service";
import { sendSuccessResponse } from "../../utils/sendSuccessResponse";
import TQueryObj from "../../types/TQueryObj";

const createCourseIntoDB: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
        const course = await CourseServices.createCourseIntoDB(req.body);
        sendSuccessResponse(res, {
            statusCode: 201,
            message: "Course created successfully",
            data: course,
        });
    },
);

const getAllCourseFromDB: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
        const query: TQueryObj = req.query;
        const course = await CourseServices.getAllCourseFromDB(query);

        const meta: Record<string, string | number> = {
            page: query.page || 1,
            limit: query.limit || 10,
            total: course.length,
        };

        res.status(200).send({
            statusCode: 200,
            message: "Courses retrieved successfully",
            meta: meta,
            data: course,
        });
    },
);

export const CourseController = {
    createCourseIntoDB,
    getAllCourseFromDB
}