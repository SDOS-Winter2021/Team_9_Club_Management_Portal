import axios from "axios";

const getPastEvent = async (request) => {
  let res = await axios.get(
    `https://iiitd-cms.herokuapp.com/api/clubs/sorted?name=${request}&time=past`
  );
  return await res;
};

export default getPastEvent;
