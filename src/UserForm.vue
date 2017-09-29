<template>
    <div>
        <b-container class="bv-example-row">
            <b-form @submit="onSubmit">
                <b-row>
                    <b-col cols="2"></b-col>
                    <b-col cols="8">
                        <h2>User Form</h2>
                        <b-form-group id="exampleInputGroup1"
                                      label="Email address:" label-for="exampleInput1"
                                      description="We'll never share your email with anyone else.">
                            <b-form-input id="exampleInput1"
                                          type="email" v-model.lazy="form.email" required
                                          placeholder="Enter email"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                      label="Your Name:" label-for="exampleInput2">
                            <b-form-input id="exampleInput2"
                                          type="text" v-model.lazy="form.name" required
                                          placeholder="Enter name"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup3"
                                      label="Food:" label-for="exampleInput3">
                            <b-form-select id="exampleInput3"
                                           :options="foods" required
                                           v-model="form.food"
                            ></b-form-select>
                        </b-form-group>
                        <b-form-group id="exampleGroup4">
                            <b-form-checkbox v-model="form.checked" id="exampleInput4">
                                Check me out
                            </b-form-checkbox>
                        </b-form-group>
                        <b-button type="submit" variant="primary">Submit</b-button>
                        <b-button type="reset" variant="secondary">Reset</b-button>
                    </b-col>
                </b-row>
                <b-row v-if="isSubmitted">
                    <b-col></b-col>
                    <b-col cols="8">
                        <div class="panel-body">
                            <p>Name: {{ form.name }} </p>
                            <p>Mail: {{ form.email }} </p>
                            <p>Food : {{ form.food }}</p>
                            <p>Checked: {{ form.checked }}</p>
                            <p>Secret :  {{ form.secret }}</p>
                        </div>
                    </b-col>
                </b-row>
            </b-form>
        </b-container>
    </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  export default {
    data() {
      return {
        isSubmitted : false,
        form: {
          email: '',
          name: '',
          food: null,
          checked: false,
          secret: 'S3CR3T'
        },
        foods: [
          { text:'Select One', value:null },
          'Carrots','Beans','Tomatoes','Corn'
        ]
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        this.isSubmitted = true;
        debugger;
        this.$http.post('https://vue-basic-resource.firebaseio.com/user.json', this.form)
          .then(result=>{
            console.log(result)
          })
//        alert(JSON.stringify(this.form));
      }
    }
  };
</script>

<!-- b-form-1.vue -->

