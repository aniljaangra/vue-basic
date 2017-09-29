<template>
    <div>
        <h1> Monster Health : {{health}}</h1>
        <button @click="attack">Attack</button>
    </div>
</template>

<script>
  export default {
    props : ['health','attack']
  }
</script>

