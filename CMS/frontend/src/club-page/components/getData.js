import axios from "axios";


const getData = async (request) => {
    console.log("allo getting info");
    let res = await axios.get(
      `http://127.0.0.1:8000/api/clubinfo/${request}`
    );
    //console.log(res);
    return await res;
  };

export default getData;