/* eslint-disable @typescript-eslint/no-explicit-any */

import { Query } from "mongoose";
import TQueryObj from "../types/TQueryObj";

export const filterHelper = <T>(model: Query<T[], T>, query: TQueryObj) => {
    const excludeFields = ['page', 'limit', 'sortBy', 'sortOrder', 'minPrice', 'maxPrice'];
    const queryObj:any = { ...query };

    if (queryObj.level) {
        queryObj['details.level'] = queryObj.level;
        delete queryObj.level;
    }
    excludeFields.forEach(el => delete queryObj[el as keyof TQueryObj]);
    
    const result = model.find(queryObj);
    return result;
}