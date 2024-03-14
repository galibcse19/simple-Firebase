 
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    // const [showUser,setShowUser]=useState('');
    const [showUser,setShowUser]=useState(null);
    const auth= getAuth(app);
    const provider=new GoogleAuthProvider();

    const handelGoogleSignIn=()=>{
        signInWithPopup(auth,provider)
        .then(result=>{
            const user=result.user;
            console.log(user);
            setShowUser(user);
        })
        .catch(error =>{
             console.log('error',error.message);
        })
    }
    const handelGoogleSignOut=()=>{
        signOut(auth)
        .then(result =>{
            console.log(result);
            setShowUser(null);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
             {
                showUser ?
                <button onClick={handelGoogleSignOut}>SignOut</button> :
                <button onClick={handelGoogleSignIn}>Google Login</button>
             }
             {/* <p>Name: {showUser.displayName}</p>
             <p>Email: {showUser.email}</p> */}
             {
                showUser && <div> <p>Name: {showUser.displayName}</p>
             <p>Email: {showUser.email}</p> </div>
             }

        </div>
    );
};

export default Login;