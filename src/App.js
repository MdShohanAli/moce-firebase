
import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';
const auth = getAuth(app);
function App() {
  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()


  const handlegooleProvider = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user
        setUser(user)
        console.log(user);
      })
      .cath(error => {
        console.error("error", error)
      })

  }
  const handlegithubProvider = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user
        setUser(user)
        console.log(user);
      })
      .catch(error => {
        console.error("error", error)
      })
  }
  const handlelogOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .cath(() => {
        setUser({})
      })
  }

  return (
    <div className="App">
      {
        user.uid ? <button onClick={handlelogOut}> Sign out </button> :
          <>
            <button onClick={handlegooleProvider}> Sign In With Google </button>
            <button onClick={handlegithubProvider}> Sign in With github </button>
          </>

      }



      <h2> Name : {user.displayName} </h2>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
