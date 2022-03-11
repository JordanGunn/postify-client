<template>
  <div id="navigation-bar">
    <router-link to="/">Home</router-link> |
    <router-link to="/posts">Posts</router-link> |
    <span v-if="isAuthenticated">
      <a @click="logout">Logout</a>
    </span>
    <span v-else>
      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  methods: {
    async logout() {
      await this.$store.dispatch('LogOut')
      this.$router.push('/login')
    }
  },
  computed: {
    isAuthenticated: () => this.$store.getters.isAuthenticated
  }
}
</script>

<style>

  #navigation-bar {
    padding: 30px;
  }

  #navigation-bar a {
    font-weight: bold;
    color: #2c3e50;
  }

  a:hover {
    cursor: pointer;
  }

  #navigation-bar a.router-link-exact-active {
    color: #42b983;
  }

</style>