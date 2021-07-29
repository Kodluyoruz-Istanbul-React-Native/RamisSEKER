import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import * as userTypes from '../types/user';


export const USER_LOGIN = () => {
    return {
        type: userTypes.USER_LOGIN,
        payload: {}
    };
};

 
export const USER_SIGNIN = (email, password) => async dispatch => {
    
    auth()
        .createUserWithEmailAndPassword(email, password)
        .then(d => {
             
            
            const uid = d.user.uid;
            console.log(uid)
            database()
                .ref("/USERS/${uid}/info")
                .set({
                    name: "Ramis",
                    surname: "Seker",
                    age: 26,
                })
                .then(() => console.log("Data set."));
            
            dispatch({
                type: userTypes.USER_SIGNIN,
                payload: {
                    uid
                }
            });
        })
            .catch(error => {
            alert("Sasdasd");
            if (error.code === "auth/email-already-in-use") {
                console.log("That email address is already in use!");
            }
            if (error.code === "auth/invalid-email") {
                console.log("That email address is invalid!");
            }
            console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        });
};


