import axios from "axios";

const getPastEvent = async (request) => {
  let res = await axios.get(
    `http://localhost:8000/api/clubs/sorted?name=${request}&time=past`
  );
  return await res;
};

export default getPastEvent;
