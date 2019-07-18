<template>
  <div id="user-form">
    <h1>User Form</h1>

    <form class="grid" @submit="addNewUser">
      <div class="item--full">
        <p v-if="errors.length" class="errors">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
          </ul>
        </p>
        <label for="name">Name</label>
        <input type="text" v-model="user.name" id="name" name="name" />
        <label for="surname">Surname</label>
        <input type="text" v-model="user.surname" id="surname" name="surname" />
        <input type="submit" value="Add" />
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'UserForm',
  data() {
    return {
      errors: [],
      user: {
        name: '',
        surname: '',
      },
    };
  },
  methods: {
    ...mapActions('Users', {
      addUser: 'addUser',
    }),
    addNewUser(e) {
      this.checkForm(e);
      this.addUser(this.user);
      this.user = {
        name: '',
        surname: '',
      };
    },
    checkForm(e) {
      this.errors = [];
      if (!this.user.name) {
        this.errors.push('Name required.');
      }
      if (!this.user.surname) {
        this.errors.push('Surname required.');
      }
      e.preventDefault();
    },
  },
  computed: {
    ...mapState('Users', [
      'users',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  .grid {
    display: grid;
    grid-template-columns:
      [viewport-start] minmax(1em, 1.5fr)
      [container-start] minmax(20em, 1.5fr) [container-end]
      minmax(1em, 1.5fr) [viewport-end];
    margin: auto;
  }

  form {
    box-shadow: 5px 10px 5px 10px;
    width: 60%;
    min-width: 24em;
    background: white;
  }

  .item--full {
    grid-column: viewport;
    display: inherit;
    grid-template-columns: inherit;
    margin-bottom: 1em;
    margin-top: 1em;
    min-width: inherit;
    width: inherit;
  }
  .item--full > * {
    grid-column: container;
  }
  input {
    margin-bottom: 1em;
  }

  input[type="submit"] {
    margin-top: 0.5em;
    font-weight: bold;
    font-size: 1.2em;
    cursor: pointer;
    color: #fff;
    width: 100%;
    height: 1.5em;
    background: #FF5E00;
    border: none;
    border-bottom: 5px solid #b44200;
  }

  .errors {
    background: red;
    padding-top: 0.5em;
  }
</style>
