<template>
  <img @click="openGift(gift.id)" :src="gift.url" alt="" class=" selectable img-fluid gift">
  <h5 class="text-center">{{ gift.tag }}</h5>
</template>


<script>
import { Gift } from "../models/Gift";
export default {

  props: {
    gift: {type: Gift}
  },

  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>