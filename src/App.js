
import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';
const auth = getAuth(app);
function App() {
  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider()
  const handlelogOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .cath(() => {
        setUser({})
      })
  }
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

  return (
    <div className="App">
      {
        user.uid ? <button onClick={handlelogOut}> Sign out </button> :
          <button onClick={handlegooleProvider}> Sign In With Google </button>

      }

      <h2> Name : {user.displayName} </h2>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
