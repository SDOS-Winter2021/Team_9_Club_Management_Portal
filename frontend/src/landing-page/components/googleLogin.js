import axios from "axios";

/**
 * 
 * @param {*} accesstoken This is the accesstoken of the user obtained from Google
 */
const googleLogin = async (response) => {
    console.log("allo sending info");
    
    let res = await axios.put(
      "http://127.0.0.1:8000/api/user/login",
      response
    );

    return await res;
  };

export default googleLogin;