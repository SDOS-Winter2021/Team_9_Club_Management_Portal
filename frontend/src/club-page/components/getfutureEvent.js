import axios from "axios";

const getFutureEvent = async (request) => {
  let res = await axios.get(
    `https://iiitd-cms.herokuapp.com/api/clubs/sorted?name=${request}&time=future`
  );
  return await res;
};

export default getFutureEvent;