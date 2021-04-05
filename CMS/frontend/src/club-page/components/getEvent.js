import axios from "axios";


const getEvent = async (request) => {
    console.log("allo getting info");
    let res = await axios.get(
      `http://127.0.0.1:8000/api/clubs?name=${request}`
    );
    //console.log(res);
    return await res;
  };

export default getEvent;