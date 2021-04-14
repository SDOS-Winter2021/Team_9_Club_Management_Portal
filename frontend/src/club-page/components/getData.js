import axios from "axios";

const getData = async (request) => {
  console.log("allo getting info");
  let res = await axios.get(
    `https://iiitd-cms.herokuapp.com/api/clubinfo/${request}`
  );
  //console.log(res);
  return await res;
};

export default getData;
