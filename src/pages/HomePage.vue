<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mb-3">
        <form>
          <label for="tag" class="form-label">tag</label>
          <input type="text" id="tag-input" class="form-control">
          <label for="url" class="form-label">url</label>
          <input type="text" id="url-input" class="form-control">
        </form>
      </div>
    </div>
    <div class="row">
      <div v-for="gift in gifts" class="col-4 d-flex justify-content-center flex-column">
          <GiftPage :gift="gift"/>
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
