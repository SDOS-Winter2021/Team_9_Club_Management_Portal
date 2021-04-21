import axios from "axios";

const getEvent = async (request) => {
  let res = await axios.get(
    `https://iiitd-cms.herokuapp.com/api/clubs?name=${request}`
  );
  return await res;
};

export default getEvent;