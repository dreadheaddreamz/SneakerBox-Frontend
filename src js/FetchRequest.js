class FetchRequest {
    constructor() {
        this.url = "http://localhost:3000"
    }

    getShoes() {
        return fetch (`${this.url}/shoes`)
        .then(response => response.json())
        .then(shoe => {
            shoe.data.forEach(shoes => {
                let newShoes = new Shoes(shoes, shoes.attributes)

                document.querySelector('#shoes-container').innerHTML += newShoes.renderShoesCard()
            })
        })
    }

    postFetch(title, description, image) {
        const bodyData = {title, description, image}

        fetch(`${this.url}/shoes`, {
            method: "POST",
            headers: {"Content-Type": application/json},
            body: JSON.stringify(bodyData)
        })
        .then(response => response.json())
        .then(shoes => {
            const shoesData = shoes.data

            let newShoes = new Shoes(shoesData, shoesData.attributes)
            document.querySelector('#shoes-container').innerHTML += newShoes.renderShoesCard
        })
    }

}