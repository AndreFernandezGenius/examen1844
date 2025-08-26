let token = '';

const login = async () => {
  const usuario = document.getElementById('usuario').value;
  const res = await fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ usuario })
  });
  const data = await res.json();
  token = data.token;
  document.getElementById('app').style.display = 'block';
  cargarUsuarios();
};

const cargarUsuarios = async () => {
  const res = await fetch('http://localhost:3000/api/usuarios', {
    headers: { Authorization: `Bearer ${token}` }
  });
  const datos = await res.json();
  const lista = document.getElementById('lista');
  lista.innerHTML = '';
  datos.forEach(u => {
    const li = document.createElement('li');
    li.textContent = `${u.nombre} (${u.edad})`;
    li.innerHTML += ` <button onclick="borrarUsuario('${u.id}')">❌</button>`;
    li.innerHTML += ` <button onclick="editarUsuario('${u.id}', '${u.nombre}', ${u.edad})">✏️</button>`;
    lista.appendChild(li);
  });
};

const crearUsuario = async () => {
  const nombre = document.getElementById('nombre').value;
  const edad = document.getElementById('edad').value;
  await fetch('http://localhost:3000/api/usuarios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ nombre, edad })
  });
  cargarUsuarios();
};

const borrarUsuario = async (id) => {
  await fetch(`http://localhost:3000/api/usuarios/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  });
  cargarUsuarios();
};

const editarUsuario = async (id, nombre, edad) => {
  const nuevoNombre = prompt('Nuevo nombre:', nombre);
  const nuevaEdad = prompt('Nueva edad:', edad);
  await fetch(`http://localhost:3000/api/usuarios/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ nombre: nuevoNombre, edad: nuevaEdad })
  });
  cargarUsuarios();
};
