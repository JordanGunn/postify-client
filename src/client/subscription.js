import client from "./client";

//get list of subscription
const list = accountId =>
  client.get(`/api/qry/account/${accountId}/subscription`);

//get a spesific subscription with its id
const get = (accountId, subscriptionId) =>
  client.get(`/api/qry/account/${accountId}/subscription/${subscriptionId}`);

//request start of a subscription
const startSubscription = (accountId, subscriptionId) =>
  client.patch(
    `/api/cmd/account/${accountId}/subscription/${subscriptionId}/start`
  );

//get a check_out session for starting this subscription
const getSessionStart = (accountId, subscriptionId) =>
  client.get(
    `/api/qry/account/${accountId}/subscription/${subscriptionId}/start`
  );

//request manage of a subscription
const manageSubscription = (accountId, subscriptionId) =>
  client.patch(
    `/api/cmd/account/${accountId}/subscription/${subscriptionId}/manage`
  );

//get a check_out session for managing this subscription
const getSessionManage = (accountId, subscriptionId) =>
  client.get(
    `/api/qry/account/${accountId}/subscription/${subscriptionId}/manage`
  );

//request cancel of a subscription
const cancelSubscription = (accountId, subscriptionId) =>
  client.patch(
    `/api/cmd/account/${accountId}/subscription/${subscriptionId}/cancel`
  );

//get list of subscription's alerts
const listAlerts = (accountId, subscriptionId) =>
  client.get(
    `/api/qry/account/${accountId}/subscription/${subscriptionId}/alert`
  );

//get list of resolved subscription's alerts
const listResolvedAlerts = (accountId, subscriptionId) =>
  client.get(
    `/api/qry/account/${accountId}/subscription/${subscriptionId}/alert/history`
  );

export {
  list,
  get,
  startSubscription,
  getSessionStart,
  manageSubscription,
  getSessionManage,
  cancelSubscription,
  listAlerts,
  listResolvedAlerts
};
