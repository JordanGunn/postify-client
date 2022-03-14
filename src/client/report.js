import client from "./client";

//get account report
const getReport = accountId =>
  client.get(`/api/qry/account/${accountId}/report`);

export { getReport };
