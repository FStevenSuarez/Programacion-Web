// Listas para almacenar datos de jugadores y equipos
const employees = []; // Lista de jugadores
const companys = []; // Lista de equipos

// Lista de posiciones en el fútbol
const cargos = [
    "Desarrollador Frontend", 
    "Desarrollador Backend", 
    "Auxiliar de Carga", 
    "Desarrollador Junior", 
    "Secreataria", 
    "Analista de Datos", 
    "Soporte", 
    "Arquitecto de Software"
];

// Carga las posiciones en el formulario
function loadCargo() {
    const cargoSelect = document.getElementById("employeeCargo"); // Obtiene el elemento select para las posiciones
    cargoSelect.innerHTML = `<option value="">Seleccione su cargo dentro de la empresa</option>`; // Agrega la opción predeterminada
    cargos.forEach(cargo => {
        const option = document.createElement("option"); // Crea un elemento de opción
        option.value = cargo; // Establece el valor de la opción
        option.textContent = cargo; // Establece el texto visible de la opción
        cargoSelect.appendChild(option); // Agrega la opción al selector
    });
}

// Carga los equipos en el selector del formulario de jugadores
function updateCompanySelect() {
    const companySelect = document.getElementById("employeeCompany"); // Obtiene el elemento select para los equipos
    companySelect.innerHTML = `<option value="">Seleccione una empresa</option>`; // Agrega la opción predeterminada
    companys.forEach(company => {
        const option = document.createElement("option"); // Crea un elemento de opción
        option.value = company.name; // Establece el valor de la opción como el nombre del equipo
        option.textContent = company.name; // Establece el texto visible como el nombre del equipo
        companySelect.appendChild(option); // Agrega la opción al selector
    });
}

// Maneja el formulario para agregar equipos
const companyForm = document.getElementById("addCompanyForm"); // Obtiene el formulario para agregar equipos
companyForm.addEventListener("submit", e => {
    e.preventDefault(); // Evita el envío predeterminado del formulario
    const name = document.getElementById("companyName").value; // Obtiene el nombre del equipo
    const logoFile = document.getElementById("companyLogo").files[0]; // Obtiene el archivo del logo
    const logo = logoFile ? URL.createObjectURL(logoFile) : "assets/images/default-team.jpg"; // Genera la URL del logo o usa una imagen predeterminada

    if (!name) {
        alert("Por favor, ingrese el nombre de la empresa."); // Muestra un mensaje si el nombre está vacío
        return; // Finaliza la ejecución
    }

    const company = { name, logo }; // Crea un objeto equipo
    companys.push(company); // Agrega el equipo a la lista de equipos
    updateCompanyCards(); // Actualiza las tarjetas de equipos
    updateCompanySelect(); // Actualiza el selector de equipos
    companyForm.reset(); // Resetea el formulario
});

// Actualiza la visualización de los equipos
function updateCompanyCards() {
    const companyContainer = document.getElementById("companyCardsContainer"); // Obtiene el contenedor de tarjetas de equipos
    companyContainer.innerHTML = ""; // Limpia el contenido existente
    companys.forEach(company => {
        const card = `<div class="company-card">
            <img src="${company.logo}" alt="${company.name}" style="width: 100px; height: 100px; border-radius: 50%;"> <!-- Imagen del logo del equipo -->
            <h3>${company.name}</h3> <!-- Nombre de la empresa -->
        </div>`;
        companyContainer.innerHTML += card; // Agrega la tarjeta al contenedor
    });
}

// Maneja el formulario para agregar jugadores
const employeeForm = document.getElementById("addEmployeeForm"); // Obtiene el formulario para agregar jugadores
employeeForm.addEventListener("submit", e => {
    e.preventDefault(); // Evita el envío predeterminado del formulario
    const name = document.getElementById("employeeName").value; // Obtiene el nombre del jugador
    const age = document.getElementById("employeeAge").value; // Obtiene la edad del jugador
    const cargo = document.getElementById("employeeCargo").value; // Obtiene la posición seleccionada
    const company = document.getElementById("employeeCompany").value; // Obtiene el equipo seleccionado
    const photoFile = document.getElementById("employeePhoto").files[0]; // Obtiene el archivo de la foto
    const photo = photoFile ? URL.createObjectURL(photoFile) : "assets/images/default-player.jpg"; // Genera la URL de la foto o usa una imagen predeterminada

    if (!name || !age || !cargo || !company) {
        alert("Por favor, complete todos los campos obligatorios."); // Muestra un mensaje si falta algún campo obligatorio
        return; // Finaliza la ejecución
    }

    const employee = { name, age, cargo, company, photo }; // Crea un objeto jugador
    employees.push(employee); // Agrega el jugador a la lista de jugadores
    updateEmployeeTable(); // Actualiza la tabla de jugadores
    employeeForm.reset(); // Resetea el formulario
});

// Actualiza la tabla de jugadores
function updateEmployeeTable() {
    const employeeTable = document.getElementById("employeeTableBody"); // Obtiene el cuerpo de la tabla de jugadores
    employeeTable.innerHTML = ""; // Limpia el contenido existente
    employees.forEach(employee => {
        const row = `<tr>
            <td><img src="${employee.photo}" alt="${employee.name}" style="width: 50px; height: 50px; border-radius: 50%;"></td> <!-- Foto del jugador -->
            <td>${employee.name}</td> <!-- Nombre del jugador -->
            <td>${employee.age}</td> <!-- Edad del jugador -->
            <td>${employee.cargo}</td> <!-- Posición del jugador -->
            <td>${employee.company}</td> <!-- Equipo del jugador -->
        </tr>`;
        employeeTable.innerHTML += row; // Agrega la fila a la tabla
    });
}

// Inicializa el sistema al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    loadCargo(); // Carga las posiciones en el selector
    updateCompanySelect(); // Carga las empresas en el selector
});
