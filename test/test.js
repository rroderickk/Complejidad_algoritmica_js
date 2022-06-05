class ColectionTodo {

  id = 0;
  constructor(collection) {
    this.collection = [];
  }

  addTodo({ content, completed }) {
    const id = this.id++;
    this.collection.push({ id, content, completed });
  }

  getTodos() {
    return this.collection;
  }

  showTodos() {
    console.log(this.getTodos());
  }

  printTodos() {
    return this.getTodos().forEach(todo => {
      console.log(todo.id, todo.content, todo.completed);
    });
  }

  setCompleted(id, trueOrFalse) {
    const find = this.collection.find(todo => todo.id === id);
    if (find) find.completed = trueOrFalse;
  }

  searchTodo(text) {
    let lowerText_to_search = text.toLowerCase();
    const find = this.collection.filter(
      todo => todo.content.toLowerCase().includes(lowerText_to_search)
    );
    if (find.length > 0) {
      return `${find.length} resultados encontrados`;
    }
    return `[-] ${text} not found`;
  }
}

const colectionUno = new ColectionTodo("Mis todos");

colectionUno.addTodo({ content: "Learn OOP", completed: false });
colectionUno.addTodo({ content: "Learn Pattern", completed: false });

colectionUno.setCompleted(0, true);
colectionUno.setCompleted(1, true);

const find = colectionUno.searchTodo("p");
console.log("->", find);

// console.log(colectionUno.getTodos());
colectionUno.showTodos();
colectionUno.printTodos();
