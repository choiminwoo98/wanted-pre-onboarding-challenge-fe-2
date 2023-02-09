interface TodoProps {
    id: number;
    content: string;
    completed: boolean;
    category: string;
    tag?: string[];
}

function createTodo(content: string, category: string, tag?: string[]) {}

function readTodos() {}

function readTodoById(id: string) {}

function updateTodo(
    id: string,
    content?: string,
    category?: string,
    tag?: string[]
) {}

function deleteTodo(id: string) {}

function deleteAllTodo() {}

function deleteTodoTag(id: string, tag: string) {}

function deleteTodoAllTag(id: string) {}
