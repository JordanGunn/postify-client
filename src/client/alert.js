import client from "./client";

//get list of alerts
const getNewAlerts = (accountId, size, source, from, to, before, after) =>
  client.get(`/api/qry/account/${accountId}/alert`, {
    params: {
      size,
      source,
      from,
      to,
      before,
      after
    }
  });

//get list of resolved alerts
const getResolvedAlerts = (accountId, size, source, from, to, before, after) =>
  client.get(`/api/qry/account/${accountId}/alert/history`, {
    params: {
      size,
      source,
      from,
      to,
      before,
      after
    }
  });

//get single alert with id
const getAlert = (accountId, alertId) =>
  client.get(`/api/qry/account/${accountId}/alert/${alertId}`);

//mark an alert as seen(resolve an alert)
const resolveAlerts = (accountId, alertId) =>
  client.patch(`/api/cmd/account/${accountId}/alert/${alertId}`);

//Get notification recipients
const getEnableRecipients = accountId =>
  client.get(`/api/qry/account/${accountId}/recipient`, {
    params: {
      status: "enabled",
      size: 100 // TODO: work around
    }
  });

export {
  getNewAlerts,
  getResolvedAlerts,
  resolveAlerts,
  getEnableRecipients,
  getAlert
};
