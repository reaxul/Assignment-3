import { Query } from "mongoose";
import TQueryObj from "../types/TQueryObj";

export const priceFilterHelper = <T>(model: Query<T[], T>, query: TQueryObj) => {
    if (query.minPrice || query.maxPrice) {
        const minPrice = Number(query.minPrice) || 0;
        const maxPrice = Number(query.maxPrice) || 100000;
        model = model.find({ price: { $gte: minPrice, $lte: maxPrice } });
    }
    return model;
}