import axios from "axios";

const getData = async (request) => {
  let res = await axios.get(
    `https://iiitd-cms.herokuapp.com/api/clubinfo/${request}`
  );
  return await res;
};

export default getData;
