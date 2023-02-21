
export class Gift{

  constructor(data){
    this.id = data.id
    this.url = data.url || "https://media.istockphoto.com/id/1152848595/vector/isometric-gift-flat-icon-pixel-perfect-for-mobile-and-web.jpg?s=612x612&w=0&k=20&c=6_69uzGDhk5B1p9v8T_W_367qq0vUKypA1pkPoauk-U="
    this.tag = data.tag
    this.opened = data.opened || false
  }

}