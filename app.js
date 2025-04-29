const express = require('express');
const app = express();
const port = 3000;

const usersData = [
  { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
  { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
  { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
  { id: 4, name: 'David', age: 25, specialty: 'QAs' },
  { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
  { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
  { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
  { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
  { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
  { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
  { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
  { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
  { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
  { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
  { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
  { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
  { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
  { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
  { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
  { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
  { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
  { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
  { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
  { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
  { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
  { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
  { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
  { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
  { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
  { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
];

function filterUsersBySpecialty(users, specialty) {
  return users.filter(user => user.specialty === specialty);
}

app.get('/', (req, res) => {
  const specialties = [...new Set(usersData.map(user => user.specialty))];
  let navigationLinks = specialties.map(
    specialty => `<a href="/${specialty}">${specialty.toUpperCase()}</a>`
  ).join(' | ');

  res.send(`
    <h1>Listado de Usuarios por Especialidad</h1>
    <p>Navega por las diferentes especialidades:</p>
    <div>${navigationLinks}</div>
  `);
});

app.get('/marketing', (req, res) => {
  const filteredUsers = filterUsersBySpecialty(usersData, 'marketing');
  const specialtyUpper = 'MARKETING';
  let userList = filteredUsers.map(user => `<p>Nombre: ${user.name}, Edad: ${user.age}</p>`).join('');
  res.send(`<h2>Especialidad: ${specialtyUpper}</h2><p>Número de personas: ${filteredUsers.length}</p><div>${userList}</div><p><a href="/">Volver a la página principal</a></p>`);
});

app.get('/developers', (req, res) => {
  const filteredUsers = filterUsersBySpecialty(usersData, 'developers');
  const specialtyUpper = 'DEVELOPERS';
  let userList = filteredUsers.map(user => `<p>Nombre: ${user.name}, Edad: ${user.age}</p>`).join('');
  res.send(`<h2>Especialidad: ${specialtyUpper}</h2><p>Número de personas: ${filteredUsers.length}</p><div>${userList}</div><p><a href="/">Volver a la página principal</a></p>`);
});

app.get('/qas', (req, res) => {
  const filteredUsers = filterUsersBySpecialty(usersData, 'QAs');
  const specialtyUpper = 'QAS';
  let userList = filteredUsers.map(user => `<p>Nombre: ${user.name}, Edad: ${user.age}</p>`).join('');
  res.send(`<h2>Especialidad: ${specialtyUpper}</h2><p>Número de personas: ${filteredUsers.length}</p><div>${userList}</div><p><a href="/">Volver a la página principal</a></p>`);
});

app.get('/ventas', (req, res) => {
  const filteredUsers = filterUsersBySpecialty(usersData, 'ventas');
  const specialtyUpper = 'VENTAS';
  let userList = filteredUsers.map(user => `<p>Nombre: ${user.name}, Edad: ${user.age}</p>`).join('');
  res.send(`<h2>Especialidad: ${specialtyUpper}</h2><p>Número de personas: ${filteredUsers.length}</p><div>${userList}</div><p><a href="/">Volver a la página principal</a></p>`);
});

// Manejo de errores 404
app.use((req, res, next) => {
  res.status(404).send('<h1>404 - Página no encontrada</h1><p><a href="/">Volver a la página principal</a></p>');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});