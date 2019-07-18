<template>
  <ul>
    <li v-for="user in users" v-bind:key="user">{{ user.name }}  {{user.surname}}</li>
  </ul>
</template>

<script>
export default {
  name: 'Users',
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.$http.get('/users/')
      .then((res) => {
        let users = res.data;
        for (let key in users) {
          this.users.push(users[key]);
        }
      })
      .catch(error => console.log(error));
  },
};
</script>

<style scoped>

</style>
