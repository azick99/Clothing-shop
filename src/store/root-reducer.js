import { combineReducers } from "redux";
import { categoriesReducer } from "./categories/category.reducer";
import { cartReducer } from "./curt/curt.reducer";
import { userReducer } from "./user/user.reducer";


export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart:cartReducer,
})