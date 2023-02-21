<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mb-3">
        <form @submit.prevent="giveGift()">
          <label for="tag" class="form-label">tag</label>
          <input v-model="editable.tag" required type="text" id="tag-input" class="form-control">
          <label for="url" class="form-label">url</label>
          <input v-model="editable.url" required type="text" id="url-input" class="form-control">
          <button class="btn btn-success mt-2"> Give Gift!</button>
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
import { onMounted, computed, ref } from "vue";
import { giftService } from "../services/GiftServices";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import {AppState} from "../AppState"

export default {
  setup() {

    const editable = ref({
    
    })

    async function getGifts(){
      try {
        await giftService.getGifts()
      } catch (error) {
        logger.error(error)
        Pop.error(error)
      }
    }

    

    async function giveGift(){
      try {
        let tag = editable.value.tag
        let url = editable.value.url
        // logger.log(tag)
        await giftService.giveGift(tag, url)
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

      editable,

      gifts: computed(()=> AppState.gifts),

      giveGift
    }
  }
}
</script>

<style scoped lang="scss">

.gift{
  max-height: 40vh;
  
}

</style>
