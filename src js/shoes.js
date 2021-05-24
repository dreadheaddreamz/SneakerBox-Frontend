class Shoes {
    constructor(shoes, shoesAtrributes) {
        this.id = shoes.id
        this.name = shoesAtrributes.name
        this.description = shoesAtrributes.description
        this.image = shoesAtrributes.image
        Shoes.call.push(this)
        console.log(this);
    }

    renderShoesCard() {
        return `
        <div class="card-body"
        <h5 class="card-title">${this.name}</h5>
        <p class="card-text>${this.description}</p>
        <img src=${this.image} class="card-img-bottom> `
    }
}