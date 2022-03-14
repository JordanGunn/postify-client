import client from "./client";

//Get notification recipients
const getUser = id =>
    client.get(`/4537/termproject/api/v1/user/?userId=${id}`);

//add Email recipient
const getAllUsers = () =>
  client.get(`/4537/termproject/api/v1/user`);

//add Email recipient
// check to see if second arg goes into body !!!!!!!!!!!!!!!
const addUser = (firstName, lastName, userName, password) =>
    client.post(`/4537/termproject/api/v1/user`, {
        FirstName: firstName,
        LastName: lastName,
        UserName: userName,
        Password: password,
})

export {
    getUser,
    getAllUsers,
    addUser
};
