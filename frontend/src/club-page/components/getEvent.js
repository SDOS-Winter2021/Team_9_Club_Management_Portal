import axios from "axios";

const getEvent = async (request) => {
  let res = await axios.get(
    `http://localhost:8000/api/clubs/sorted?name=${request}&time=future`
  );
  return await res;
};

export default getEvent;
