import axios from "axios";

/**
 * 
 * @param {*} accesstoken This is the accesstoken of the user obtained from Google
 */
const eventOut = async (event) => {
    console.log("allo sending info");
    console.log(event);
    let res = await axios.put(
      "http://127.0.0.1:8000/api/clubss",
      JSON.stringify(event)
    );
    console.log(res);
    return await res.status;
  };

export default eventOut;