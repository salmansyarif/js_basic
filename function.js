function sayHello(name) {     
    console.log('Hello, ' + name);
}

sayHello('John');

//get data from api
fetch  ('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));