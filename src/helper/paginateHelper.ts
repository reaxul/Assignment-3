import { Query } from "mongoose";
import TQueryObj from "../types/TQueryObj";

export const paginateHelper = <T>(model: Query<T[], T>, query: TQueryObj) => {
    if (query.page || query.limit) {
        const page = Number(query.page) || 1;
        const limit = Number(query.limit) || 10;
        const skip = (page - 1) * limit;
        model = model.skip(skip).limit(limit);
    } else {
        model = model.skip(0).limit(10);
    }
    return model;
}