<template>
  <div>
    <button @click="onRegisterButtonClick">Register</button>
  </div>
</template>

<script>

import { userRegisterRequest } from "@/api/user";

export default {
  name: 'UserRegister',
  methods: {
    onRegisterButtonClick : async() => {
      const res = await userRegisterRequest({
        "name": "Muhammad Nur Ali",
        "email": "muh.nur123434129ali43@gmail.com",
        "password": "12345678",
        "age": 20
      })
      console.log(res)
    },
  }
}
</script>

