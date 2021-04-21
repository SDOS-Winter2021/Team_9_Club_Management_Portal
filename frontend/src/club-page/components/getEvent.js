import axios from "axios";

// const getEvent = async (request) => {
//   console.log("allo getting info");
//   let res = await axios.get(
//     `https://iiitd-cms.herokuapp.com/api/clubs?name=${request}`
//   );
//   //console.log(res);
//   return await res;
// };

const getPastEvent = async (request) => {
  console.log("allo getting info");
  let res = await axios.get(
    `https://iiitd-cms.herokuapp.com/api/clubs/sorted?name=${request}&time=past`
  );
  //console.log(res);
  return await res;
};

const getFutureEvent = async (request) => {
  console.log("allo getting info");
  let res = await axios.get(
    `https://iiitd-cms.herokuapp.com/api/clubs/sorted?name=${request}&time=future`
  );
  //console.log(res);
  return await res;
};

export default { getPastEvent, getFutureEvent };
