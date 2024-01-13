import './App.css';
import { GoogleOAuthProvider, googleLogout, useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
function App() {
  
    const login = useGoogleLogin({
      onSuccess:async response =>{
        try{
              const data= await axios.get("https://www.googleapis.com/oauth2/v3/userinfo",{
                headers:{
                  "Authorization":`Bearer${response.access_token}`
                }
              })
              console.log(data);
        }catch(err)
        {
          console.log(err);
        }
      }
    })

  return (
    <div className="App">

      {/* <GoogleLogin
        onSuccess={credentialResponse => {
          const decoded = jwtDecode(credentialResponse.credential);
          console.log(decoded);

        }}
        onError={() => {
          console.log('Login Failed');
        }}
      /> */}

  <button onClick={login}>logout</button>


    </div>
  );
}

export default App;
