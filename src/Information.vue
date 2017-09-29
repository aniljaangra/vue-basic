<template>
    <div>
        <h3> Hi {{ playerName}}</h3>
        <u> Player : {{playerScore}} ,  Monster : {{monsterScore}}</u>
        <slot name="hiii"></slot>
        <slot name="huuu"></slot>
    </div>
</template>

<script>
    export default {
      props : [ "playerScore" , "monsterScore" , "playerName"]
    }
</script>