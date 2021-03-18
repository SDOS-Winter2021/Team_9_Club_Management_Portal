import axios from "axios";

/**
 * 
 * @param {*} accesstoken This is the accesstoken of the user obtained from Google
 */
const googleLogin = async (authCode) => {
    console.log("allo sending info");
    console.log(authCode);
    let res = await axios.put(
      "http://127.0.0.1:8000/api/user/login",
      JSON.stringify(authCode)
    );
    console.log(res);
    return await res.status;
  };

export default googleLogin;