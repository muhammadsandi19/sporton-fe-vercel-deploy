import { fecthAPI } from "../lib/api";
import { Category } from "../types";

export const getAllCategories = async (): Promise<Category[]> => {
  return await fecthAPI<Category[]>("/categories");
};
