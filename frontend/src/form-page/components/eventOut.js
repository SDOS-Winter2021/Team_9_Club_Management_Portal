import axios from "axios";
import Cookies from "js-cookie";

const csrftoken = Cookies.get("csrftoken");

/**
 *
 * @param {*} accesstoken This is the accesstoken of the user obtained from Google
 */
const eventPost = async (request) => {
  console.log("allo sending info");
  for (var key of request.entries()) {
    console.log(key[0] + ", " + key[1]);
  }
  let res = await axios.post(
    "https://iiitd-cms.herokuapp.com/api/clubs",
    request,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-CSRFToken": csrftoken,
      },
    }
  );
  console.log(res);
  return await res.status;
};

export default eventPost;
