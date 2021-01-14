import { useState } from "react";
import { useDispatch } from "react-redux";
import "../styles/Login.css";
import { auth } from './firebase.js';
import { login } from '../features/userSlice';

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (event) => {
        event.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL,
                }));
            }).catch(error => alert(error.message));
    }
    
    const register = () => {
        if (!name) {
            return alert("please enter a full name");
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
                .then(() => {
                    dispatch(
                        login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoUrl: profilePic,
                        })
                    );
                })
            }).catch(error => alert(error));
    };

    return ( 
        <div className="login">
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png" alt=""/>

            <form>
                <input 
                    type="text" 
                    placeholder="Full name (required if registering)" 
                    value={name} 
                    onChange={event => setName(event.target.value)} 
                />
                <input 
                    type="text"
                    placeholder="Profile pic URL (optional)"
                    value={profilePic}
                    onChange={event => setProfilePic(event.target.value)}
                />
                <input 
                    type="email"
                    placeholder="Email" 
                    value={email}
                    onChange={event => setEmail(event.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="password" 
                    value={password} 
                    onChange={event => setPassword(event.target.value)}
                />
                <button onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a memer?{" "}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
     );
}
 
export default Login;