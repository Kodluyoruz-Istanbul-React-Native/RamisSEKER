import { USER_LOGIN, USER_SIGNIN,USER_PHOTOURI,USER_POSTURI } from "../types/user";


const initialState = {
    uid: "",
    photoUri:"",
    
};


export const user = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_LOGIN:
            return {...state, uid: payload};
        case USER_SIGNIN:
            return { ...state, uid: payload.uid };
        case USER_PHOTOURI:
            return { ...state, photoUri: payload.photoUri };
        case USER_POSTURI:
            return {...state, postUri : payload.postUri };
        default:
            return {};
    }
}