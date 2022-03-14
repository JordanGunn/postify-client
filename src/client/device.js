import client from "./client";

//register a new device within an account
const registerDevice = accountId =>
  client.post(`/api/cmd/account/${accountId}/device`);

//activate a device with device Id
const activateDevice = (accountId, deviceId, deviceName) =>
  client.post(`/api/cmd/account/${accountId}/device/${deviceId}`, {
    device_name: deviceName
  });

//change device name
const changeDeviceName = (accountId, deviceId, deviceName, deviceDescription) =>
  client.patch(`/api/cmd/account/${accountId}/device/${deviceId}/name`, {
    device_name: deviceName,
    description: deviceDescription
  });

//change device profile
const changeDeviceProfile = (accountId, deviceId, profile) =>
  client.patch(`/api/cmd/account/${accountId}/device/${deviceId}/profile`, {
    profile: profile
  });

//toggle device state
const toggleDevice = (accountId, deviceId) =>
  client.patch(`/api/cmd/account/${accountId}/device/${deviceId}/toggle`);

//get a list of available device profiles for the given accountId
const getAllProfiles = accountId =>
  client.get(`/api/qry/account/${accountId}/profiles`);

//Returns list of all devices associated with this account
const getAllDevices = accountId =>
  client.get(`/api/qry/account/${accountId}/device`);

//get a specific device information
const getDevice = (accountId, deviceId) =>
  client.get(`/api/qry/account/${accountId}/device/${deviceId}`);

//Associate recipient(s) to the alerts triggered from this device
const associateDevice = (accountId, deviceId, recipients) =>
  client.post(`/api/cmd/account/${accountId}/device/${deviceId}`, {
    recipients: recipients
  });

//get alerts for a specific device
const getAlertsForDevice = (accountId, deviceId) =>
  client.get(`/api/qry/account/${accountId}/device/${deviceId}/alert`);

//get resolved alerts for a specific device
const resolvedAlertsForDevice = (accountId, deviceId) =>
  client.get(`/api/qry/account/${accountId}/device/${deviceId}/alert/history`);

export {
  registerDevice,
  activateDevice,
  changeDeviceName,
  toggleDevice,
  getAllDevices,
  getDevice,
  associateDevice,
  getAlertsForDevice,
  resolvedAlertsForDevice,
  changeDeviceProfile,
  getAllProfiles
};
