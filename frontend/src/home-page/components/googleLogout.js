import axios from "axios";

/**
 * 
 * @param {*} accesstoken This is the accesstoken of the user obtained from Google
 */
const googleLogin = async (accessToken) => {
    console.log("allo sending info");
    var request = {
      'access_token': accessToken,
      'google_id': profileObj.googleId,
      'email': profileObj.email,
      'name': profileObj.name,
    }
    console.log(request);
    let res = await axios.put(
      "http://127.0.0.1:8000/api/user/logout",
      JSON.stringify(request)
    );
    console.log(res);
    return await res.status;
  };

export default googleLogin;