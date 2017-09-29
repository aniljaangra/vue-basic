<template>
    <div>
        <b-btn class="m-1" @click="fetchUsers">Fetch Users</b-btn>
        <b-table striped hover :items="items"></b-table>

    </div>
</template>

<script>
  //import { mapState, mapActions, mapMutations } from 'vuex';

  export default {
    created(){
      const customActions = {
        getUsers : { method : 'GET' },
        getUserNames : { method : 'GET' , url : 'other-url.json' },
      }
      this.resource = this.$resource('{node}.json',{},customActions);
//      this.resource = this.$resource('{node}.json',{},customActions);
    },
    data () {
      return {
        items : []
      }
    },

    methods: {
      async fetchUsers(){
        const response = await this.resource.getUsers({ node : 'user'});
        this.items = Object.values(response.data);
      }
    }
  }
</script>