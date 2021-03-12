import axios from "axios";

export default function googleLogin() {
    {console.log("Sending login request")}
      axios.get(
        "http://localhost:8000/admin/",
        {
          'login': 0,
        }
      );
    //return await res.status;
  };
