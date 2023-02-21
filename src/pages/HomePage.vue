<template>
  <div class="container-fluid">
    <div class="row">
      <div v-for="gift in gifts" class="col-4 d-flex justify-content-center flex-column">
          <img @click="openGift(gift.id)" :src="gift.url" alt="" class=" selectable img-fluid gift">
          <h5 class="text-center">{{ gift.tag }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { giftService } from "../services/GiftServices";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import {AppState} from "../AppState"

export default {
  setup() {

    async function getGifts(){
      try {
        await giftService.getGifts()
      } catch (error) {
        logger.error(error)
        Pop.error(error)
      }
    }

    async function openGift(giftId){
      try {
        await giftService.openGift(giftId)
      } catch (error) {
        logger.error(error)
        Pop.error(error)
      }
    }

    onMounted(()=> {
      logger.log('helo fom te otehr ided')
      getGifts()
    })

    return {

      gifts: computed(()=> AppState.gifts),

      openGift
    }
  }
}
</script>

<style scoped lang="scss">

.gift{
  max-height: 40vh;
  
}

</style>
