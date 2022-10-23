import { getValue } from "../../utils/localStorage"
 
export const initialState = {
    isAuth  : getValue("payload") ? true : false,
}