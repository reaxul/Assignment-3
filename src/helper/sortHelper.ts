import { Query } from "mongoose";
import TQueryObj from "../types/TQueryObj";

export const sortHelper = <T>(model: Query<T[], T>, query: TQueryObj) => {
    if (query.sortBy && query.sortOrder) {
        const sortBy = query.sortBy;
        const sortOrder = query.sortOrder || "asc";
        const sortStr = `${sortOrder === 'desc' ? '-' : ''}${sortBy}`;
        model.sort(sortStr);
    } else {
        model.sort({ createdAt: 'desc' });
    }
    return model;
};