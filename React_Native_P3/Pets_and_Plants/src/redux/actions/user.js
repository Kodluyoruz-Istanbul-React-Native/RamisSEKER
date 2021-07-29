import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import * as userTypes from '../types/user';




export const USER_LOGIN = (email, password,navigation) => async dispatch => {
        auth()
            .signInWithEmailAndPassword(email, password,navigation)
            .then((res) => {
                console.log(res)
                if (res.user.uid !== "" && typeof res.user.uid !== "undefined") {
                    dispatch({
                    type: userTypes.USER_LOGIN,
                    payload: res.user.uid
                    
                    });
                    navigation.navigate("MainScreen");
                }
                 
            
            }).catch(error => { alert(error) });
    
    
        
    
    
  
};


export const USER_SIGNIN = (email, password) => async dispatch => {

    auth()
        .createUserWithEmailAndPassword(email, password)
        .then(d => {
          console.log(d.user.email);
            const uid = d.user.uid;
            console.log(uid)
            database()
                .ref(`/USERS/${uid}/info`)
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

            if (error.code === "auth/email-already-in-use") {
                console.log("That email address is already in use!");
            }
            if (error.code === "auth/invalid-email") {
                console.log("That email address is invalid!");
            }

            console.log(error);

        });
};


