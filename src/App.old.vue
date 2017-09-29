<template>
  <div>
    <information :playerName="playerName"  :playerScore="playerScore" :monsterScore="monsterScore"><template slot="huuu">Hello</template></information>
    <player :attack="attack" :health="playerScore"/>
    <monster :attack="attack" :health="monsterScore"/>
    <game-player v-model="playerName" />
  </div>

</template>

<script>
  import Player from './Player.vue';
  import Monster from './Monster.vue';
  import Information from './Information.vue';
  import GamePlayer from './GamePlayer.vue';

  export  default {
    data(){
      return {
        playerScore : 100,
        monsterScore : 100,
        playerName : 'Anil'
      }
    },
    components : {
      Player , Monster , Information , GamePlayer
    },
    methods : {
      attack(){
        this.playerScore -=  parseInt(Math.random() * 10);
        this.monsterScore -=  parseInt(Math.random() * 10);
      }
    }
  }
</script>