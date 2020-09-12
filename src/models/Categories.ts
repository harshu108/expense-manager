import { CategoryType } from "../utils/CategoryType";

export interface iCategory {
    name: string;
    id: string;
    color: string;
    type: CategoryType;
  }

  export interface iCategories {
    [key: string]: iCategory;
  }