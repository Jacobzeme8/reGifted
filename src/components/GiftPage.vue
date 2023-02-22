<template>
  <img @click="openGift(gift.id)" :src="gift.url" alt="" class=" selectable img-fluid gift">
  <h5 class="text-center">{{ gift.tag }}</h5>
</template>


<script>
import { Gift } from "../models/Gift";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { giftService } from "../services/GiftServices";
export default {

  props: {
    gift: {type: Gift}
  },

  setup(){

    async function openGift(giftId){
      try {
        await giftService.openGift(giftId)
      } catch (error) {
        logger.error(error)
        Pop.error(error)
      }
    }

    return {
      openGift
    }
  }
}
</script>


<style lang="scss" scoped>

</style>

