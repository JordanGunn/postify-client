<template>
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Registration</h1>
    <input
        v-model="data.firstname"
        class="form-control"
        placeholder="Name"
        required
    >
    <input
        v-model="data.lastname"
        class="form-control"
        placeholder="Name"
        required
    >

    <input
        v-model="data.username"
        class="form-control"
        placeholder="Name"
        required
    >
    <input
        v-model="data.password"
        type="password"
        class="form-control"
        placeholder="Password"
        required
    >

    <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
  </form>
</template>

<script>
import {reactive} from 'vue';
import {useRouter} from "vue-router";

export default {
  // eslint-disable-next-line
  name: "Register",
  setup() {
    const data = reactive({
      firstname: '',
      lastname: '',
      username: '',
      password: ''
    });
    const router = useRouter();

    const submit = async () => {
      await fetch ("http://localhost:8080/api/register", {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
      })
      await router.push('/login');
    }
    return { data, submit }
  }
}
</script>