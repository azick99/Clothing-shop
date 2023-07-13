<<<<<<< HEAD
import {all,call} from 'redux-saga/effects'
import { categoriesSaga } from './categories/category.saga.js'
import { userSagas } from './user/user.saga.js'
=======
import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "./categories/category.saga";
import { userSagas } from "./user/user.saga";
>>>>>>> 932ce2b502ca18d4a9be6b7010706d4bd3a5973d

export function* rootSaga(){
    yield all([call(categoriesSaga), call(userSagas)])
}