import fetch from 'node-fetch';

async function fetchTodo() {
  try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      if (!response.ok) throw new Error('Failed to fetch todo');
      return await response.json();
  } catch (error) {
      console.error('Error fetching todo:', error);
  }
}

async function fetchUser() {
  try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      if (!response.ok) throw new Error('Failed to fetch user');
      return await response.json();
  } catch (error) {
      console.error('Error fetching user:', error);
  }
}

async function fetchAll() {
  try {
      const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
      console.log('Promise.all results:', { todo, user });
  } catch (error) {
      console.error('Promise.all error:', error);
  }
}

async function fetchRace() {
  try {
      const result = await Promise.race([fetchTodo(), fetchUser()]);
      console.log('Promise.race result:', result);
  } catch (error) {
      console.error('Promise.race error:', error);
  }
}

fetchAll();
fetchRace();