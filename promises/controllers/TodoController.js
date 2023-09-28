export class TodoController {
    constructor(baseUrl) {
        this._baseUrl = baseUrl
    }

   async getTodoById(id) {
        const response = await fetch(`${this._baseUrl}/todos/${id}`)
        const todo = await response.json()
        return todo
    }
}
