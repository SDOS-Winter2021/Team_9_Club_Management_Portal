import axios from "axios";

/**
 * 
 * @param {*} accesstoken This is the accesstoken of the user obtained from Google
 */
const googleLogin = async (accessToken,profileObj) => {
    console.log("allo sending info");
    console.log({accessToken});
    console.log({profileObj});
    let res = await axios.post(
      "http://127.0.0.1:8000/rest-auth/google/",
      {
        access_token: accessToken,
        email: profileObj.email,
        googleid: profileObj.googleId,
        name: profileObj.name,
      }
    );
    console.log(res);
    return await res.status;
  };

export default googleLogin;