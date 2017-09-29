<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="10">&nbsp;</b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-btn variant="info" class="m-1" @click="componentName = 'user-list'">UserList</b-btn>
          <b-btn variant="info" class="m-1" @click="componentName = 'user-form'">UserForm</b-btn>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <component :is="componentName"/>
        </b-col>
      </b-row>
    </b-container>

  </div>

</template>

<script>
  import UserForm from './UserForm.vue';
  import UserList from './UserList.vue';

  export  default {
    components : {
      UserForm , UserList
    },
    data(){
      return {
        componentName : 'user-form'
      }
    }

  }
</script>