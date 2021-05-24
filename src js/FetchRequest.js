class FetchRequest {
    constructor() {
        this.url = "http://localhost:3000"
    }

    getShoes() {
        return fetch (`${this.url}/shoes`)
        .then(response => response.json())
    }

    fetchCreateShoes() {
        return fetch(`${this.url}/shoes`, {
            method: "POST" ,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                name: event.target[0].value,
                description: event.target[0].value,
                image: event.target[0].value
            })
        })
        .then(response => response.json())
    }
    fetchRemoveShoe() {
        return fetch(`${this.url}/students/${id}`, {
            method: "DELETE", 
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
    }
}