export class PostsController {
    constructor(baseUrl) {
        this._baseUrl = baseUrl
    }

    async createPost(data){
        const response = await fetch(`${this._baseUrl}/posts`,  {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        return response.json()
        // const value = await response.json()
        // return value
    }
}


