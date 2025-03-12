import fetch from 'node-fetch';

function fetchTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .catch(error => console.error('Error fetching todo:', error));
}

function fetchUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .catch(error => console.error('Error fetching user:', error));
}

Promise.all([fetchTodo(), fetchUser()])
  .then(results => {
      const [todo, user] = results;
      console.log('Promise.all results:', { todo, user });
  })
  .catch(error => console.error('Promise.all error:', error));

Promise.race([fetchTodo(), fetchUser()])
  .then(result => console.log('Promise.race result:', result))
  .catch(error => console.error('Promise.race error:', error));