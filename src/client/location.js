import client from "./client";

//get location info
const getLocations = ipAddress =>
  client.get(`https://ipapi.co/${ipAddress}/json/`);

export default getLocations;
