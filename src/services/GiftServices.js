import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { giftApi } from "./AxiosService"
import { Gift } from "../models/Gift.js"

class GiftService{

  async getGifts(){
    const res = await giftApi.get('api/gifts')
    // logger.log(res.data)
    AppState.gifts = res.data.map(g => new Gift(g))
    // logger.log(AppState.gifts[2])
  }

  async openGift(giftId){
    const res = await giftApi.put(`api/gifts/${giftId}`, {opened: true})
    logger.log(res.data)
  }

}

export const giftService = new GiftService()