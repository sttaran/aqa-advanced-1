import test from "node:test";
import assert from "assert";
import {TodoController} from "./controllers/TodoController.js";
import {PostsController} from "./controllers/PostsController.js";

test('should fetch todo item by id 1', async () => {
    const id = 1
    const controller = new TodoController("https://jsonplaceholder.typicode.com")

    const todo = await controller.getTodoById(id)
    assert.strictEqual(todo.id, id, `should return todo item with id ${id}`);
});

test('should create post', async () => {
    const postData = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    }
    const controller = new PostsController("https://jsonplaceholder.typicode.com")

    const todo = await controller.createPost(postData)

    assert.strictEqual(todo.title, postData.title, `title should be saved correctly`);
    assert.strictEqual(todo.body, postData.body, `body should be saved correctly`);
    assert.strictEqual(todo.userId, postData.userId, `userId should be saved correctly`);
});
