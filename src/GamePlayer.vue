<template>
    <input type="text" :value="name" @input="updateValue" />
</template>

<script>
    export default {
      props : ['name'],
      methods : {
        updateValue( $event){
          this.$emit('input' , $event.target.value);
        }
      }
    }
</script>