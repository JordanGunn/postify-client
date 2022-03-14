import client from "./client";

const getAllBaits = (accountId, params = {}) =>
  client.get(`/api/qry/account/${accountId}/bait`, { params });

const createBait = (name, description, accountId, type) =>
  client.post(`/api/cmd/account/${accountId}/bait`, {
    name,
    description,
    type
  });

const getBait = (accountId, baitId) =>
  client.get(`/api/qry/account/${accountId}/bait/${baitId}`);

const updateBait = (accountId, baitId, name, description) =>
  client.patch(`/api/cmd/account/${accountId}/bait/${baitId}/info`, {
    name,
    description
  });

// const associateBait = (accountId, baitId, recipients) =>
//   client.post(`/api/cmd/account/${accountId}/bait/${baitId}/recipient`, {
//     recipients
//   });
//
// const baitAlerts = (accountId, baitId) =>
//   client.get(`/api/qry/account/${accountId}/bait/${baitId}/alert`);
//
// const resolvedBaits = (accountId, baitId) =>
//   client.get(`/api/qry/account/${accountId}/bait/${baitId}/alert/history`);
//
// const toggleBait = (accountId, baitId) =>
//   client.patch(`/api/cmd/account/${accountId}/bait/${baitId}`);

const removeBait = (accountId, baitId) =>
  client.delete(`/api/cmd/account/${accountId}/bait/${baitId}`);

export {
  getAllBaits,
  createBait,
  getBait,
  // associateBait,
  // baitAlerts,
  // resolvedBaits,
  // toggleBait,
  removeBait,
  updateBait
};
