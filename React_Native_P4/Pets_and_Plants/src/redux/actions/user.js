import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import * as userTypes from '../types/user';




export const USER_LOGIN = (email, password,navigation) => async dispatch => {
        auth()
            .signInWithEmailAndPassword(email, password,navigation)
            .then((res) => {
                const uid = res.user.uid;
                
                if (uid !== "" && typeof uid !== "undefined") {
                    dispatch({
                    type: userTypes.USER_LOGIN,
                    payload: uid
                    });
                    navigation.navigate("MainScreen");
                }
                
                    database()
                    .ref(`/USERS/${uid}/info`)
                    .once('value')
                    .then(snapshot => {
                        // console.log(snapshot.val().image);
                     if (snapshot.val().image !== "" && typeof snapshot.val().image !== "undefined") {
                        dispatch({
                        type: userTypes.USER_PHOTOURI,
                            payload: {photoUri : snapshot.val().image}
                        });
                            
                }

                        // console.log('User data: ', snapshot.val());
                    });
            })
            .catch(error => { alert(error) });
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

export const USER_POSTURI = () => async dispatch => {

  // console.log("test");
      // const pathFile = `/images/${uid}_${new Date().getTime()}`
      // const reference = storage().ref(pathFile);
      // await reference.putFile(postUri.uri);
      
      
      // const task = reference.putFile(postUri.uri);

      // task.on('state_changed', taskSnapshot => {
      //   console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
      // });

      // task.then(() => {
      //   console.log('Image uploaded to the bucket!');
      // });
      // const url = await storage().ref(pathFile).getDownloadURL();



}


