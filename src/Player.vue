<template>
    <div>
        <h1> Player Health : {{health}}</h1>
        <button @click="attack">Attack</button>
    </div>
</template>

<script>
  export default {
    props : ['health','attack']
  }
</script>

