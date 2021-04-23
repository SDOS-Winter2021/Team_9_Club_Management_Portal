import axios from "axios";

const getData = async (request) => {
  let res = await axios.get(
    `http://localhost:8000/api/clubinfo/${request}`
  );
  return await res;
};

export default getData;
