import axios from "axios";
const foodArr = axios.create({
  baseURL: "https://6290872f27f4ba1c65bb1026.mockapi.io/fashion",
});

export default foodArr;

// const peopleApi = axios.create({
//     baseURL: "https://628e8845a339dfef87af96a6.mockapi.io/people",
//   });

//   export default peopleApi;
