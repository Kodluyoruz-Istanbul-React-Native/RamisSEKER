import { USER_LOGIN, USER_SIGNIN } from "../types/user";


const initialState = {
    uid: "",
    
};


export const user = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_LOGIN:
            return {...state, uid: payload};
        case USER_SIGNIN:
            return { ...state, uid: payload.uid };
        
        default:
            return {};
    }
}