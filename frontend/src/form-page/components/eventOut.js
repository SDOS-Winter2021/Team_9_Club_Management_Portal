import axios from "axios";

/**
 * 
 * @param {*} accesstoken This is the accesstoken of the user obtained from Google
 */
const eventOut = async (event) => {
    console.log("allo sending info");
    for (var key of event.entries()) {
      console.log(key[0] + ', ' + key[1]);
  }
    let res = await axios.put(
      "http://127.0.0.1:8000/api/user/login",
      event,
      {
        headers: {
        'Content-Type': 'multipart/form-data'
      }}
    );
    console.log(res);
    return await res.status;
  };

export default eventOut;