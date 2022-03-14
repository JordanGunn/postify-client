<template>
  <div>
    <div v-if="auth">
      <div id="maincontainer">
        <p class="title">Postify API Admin</p>

        <div id="responsecontainer">
          <textarea id="userinfo" readonly="readonly"></textarea>
          <button class="userbutton" @click="getAllUsers">Get All Users</button>
        </div>

        <div id="responseinputcontainer">
          <input
            id="getuserinput"
            class="wordinput"
            placeholder="Enter User Id..."
            type="text"
            v-model="getUserParams.id"
          />
          <button class="userbutton" @click="getUser(getUserParams.id)">Get User</button>
        </div>

        <div id="usercontainer">
          <div id="userinputcontainer">
            <input
              id="firstnameinput"
              class="wordinput"
              placeholder="Enter First Name..."
              type="text"
              v-model="addUserParams.firstName"
            />
            <input
              id="lastnameinput"
              class="wordinput"
              placeholder="Enter Last Name..."
              type="text"
              v-model="addUserParams.lastName"
            />
            <input
              id="usernameinput"
              class="wordinput"
              placeholder="Enter Username..."
              type="text"
              v-model="addUserParams.username"
            />
            <input
              id="passwordinput"
              class="wordinput"
              placeholder="Enter Password..."
              type="text"
              v-model="addUserParams.password"
            />
          </div>
          <button id="submitbutton" class="button" @click="addUser()">
            Add User
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import {getUser} from "@/client/user";
import router from "@/router";

export default {
  // eslint-disable-next-line
  name: "AdminDashboard",
  data () {
    return {
      addUserParams: {
        firstName: null,
        lastName: null,
        username: null,
        password: null,
      },
      getUserParams: {
        id: null,
      },
    };
  },


  setup() {
    const message = ref("Not logged in...");
    const store = useStore();
    const auth = computed(() => store.state.authenticated);

    if (!store.state.authenticated) { router.push("/login") }

    // onMounted(() => {
    //   console.log(this.$refs)
    // });

    // onMounted(async () => {
    //   try {
    //     const response = await fetch("http://localhost:8080/api/user", {
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       credentials: 'include'
    //     });
    //     const content = await response.json();
    //     message.value = `Welcome ${content.name}`;
    //     await store.dispatch('setAuth', true);
    // } catch (err) {
    //     await store.dispatch('setAuth', false);
    //     console.log(err);
    // }});

    return { message, auth };
  },

  methods: {
    getUser: async (id) => {
      if (id) {
        const userInfo = await document.getElementById("userinfo");
        const response = await getUser(id);
        const users = response.data;
        if (!users) {
          userInfo.innerHTML = "User Id not found.";
        } else {
          userInfo.innerHTML = `----- User Id: '${users[0].UserId}'-----\n`;
          userInfo.innerHTML += `Username: '${users[0].UserName}'\n`;
          userInfo.innerHTML += `First Name: '${users[0].FirstName}'\n`;
          userInfo.innerHTML += `Last Name: '${users[0].LastName}'\n`;
          userInfo.innerHTML += `Date Joined: '${users[0].JoinDate}'\n`;
          userInfo.innerHTML += `\n`;
        }
      }





      // const GET = "GET";
      // const xhttp = new XMLHttpRequest();
      //
      // const getUserRoot =
      //   "http://localhost:8888/4537/termproject/api/v1/user/?userId=";
      //
      // const userInfo = document.getElementById("userinfo");
      //
      // console.log(id);
      // let url = getUserRoot + id;
      // if (id) {
      //   xhttp.open(GET, url, true);
      //   xhttp.setRequestHeader(
      //     "Content-type",
      //     "application/json; charset=utf-8"
      //   );
      //   xhttp.send();
      //   xhttp.onreadystatechange = function () {
      //     // console.log(this.responseText);
      //     if (this.readyState == 4 && this.status == 200) {
      //       const users = JSON.parse(this.responseText);
      //       // console.log(users);
      //       console.log(id);
      //       if (users.length == 0 || !id.trim().length || id == "") {
      //         userInfo.innerHTML = "User Id not found.";
      //       } else {
      //         userInfo.innerHTML = `----- User Id: '${users[0].UserId}'-----\n`;
      //         userInfo.innerHTML += `Username: '${users[0].UserName}'\n`;
      //         userInfo.innerHTML += `First Name: '${users[0].FirstName}'\n`;
      //         userInfo.innerHTML += `Last Name: '${users[0].LastName}'\n`;
      //         userInfo.innerHTML += `Date Joined: '${users[0].JoinDate}'\n`;
      //         userInfo.innerHTML += `\n`;
      //       }
      //     }
      //   };
      // }
    },

    getAllUsers(event) {
      const GET = "GET";
      const xhttp = new XMLHttpRequest();
      const getAllUsersRoot =
        "http://localhost:8888/4537/termproject/api/v1/users";

      const userInfo = document.getElementById("userinfo");

      if (event) {
        xhttp.open(GET, getAllUsersRoot, true);
        xhttp.setRequestHeader(
          "Content-type",
          "application/json; charset=utf-8"
        );
        xhttp.send();
        xhttp.onreadystatechange = function () {
          // console.log(this.responseText);
          if (this.readyState == 4 && this.status == 200) {
            const users = JSON.parse(this.responseText);
            userInfo.innerHTML = ``;
            for (let i = 0; i < users.length; i++) {
              userInfo.innerHTML += `----- User Id: '${users[i].UserId}'-----\n`;
              userInfo.innerHTML += `Username: '${users[i].UserName}'\n`;
              userInfo.innerHTML += `First Name: '${users[i].FirstName}'\n`;
              userInfo.innerHTML += `Last Name: '${users[i].LastName}'\n`;
              userInfo.innerHTML += `Date Joined: '${users[i].JoinDate}'\n`;
              userInfo.innerHTML += `\n`;
            }
          }
        };
      }
    },

    addUser() {
      const PUT = "PUT";
      const xhttp = new XMLHttpRequest();
      const createUsersRoot =
        "http://localhost:8888/4537/termproject/api/v1/users";

      const userInfo = document.getElementById("userinfo");

      let firstName = this.addUserParams.firstName
      let lastName = this.addUserParams.lastName
      let userName = this.addUserParams.username
      let password = this.addUserParams.password
      let paramsJson = {
        FirstName: firstName,
        LastName: lastName,
        UserName: userName,
        Password: password,
      };

      xhttp.open(PUT, createUsersRoot, true);
      xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
      xhttp.send(JSON.stringify(paramsJson));
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          userInfo.innerHTML = this.responseText;
        }
      };
    },
  },
};
</script>

<style>
body {
  background-color: thistle;
}

#maincontainer {
  border: 10px solid blue;
  /* width: 60%; */
  margin: auto;
  background-color: cornflowerblue;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#responsecontainer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
}

#responseinputcontainer {
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2%;
}

.title {
  text-align: center;
  color: white;
  font-weight: bolder;
  font-size: 40pt;
}

.button {
  display: block;
  font-weight: bolder;
  font-size: 10pt;
  margin-bottom: 2%;
}

.userbutton {
  display: block;
  font-weight: bolder;
  font-size: 10pt;
  margin-left: 2%;
}

#usercontainer {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.wordinput {
  display: block;
  width: 90%;
  height: 2em;
  margin-left: 1%;
  margin-right: 1%;
}

#userinputcontainer {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 4%;
  margin-bottom: 4%;
  /* justify-content: space-around;
            align-items: center; */
}

#userinfo {
  display: block;
  width: 100%;
  height: 10em;
}
</style>