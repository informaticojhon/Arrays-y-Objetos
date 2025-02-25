document.write('<h3>ESTADÍSTICAS CENTRO MÉDICO ÑUÑOA</h3>');

/*ARREGLO RADIOLOGIA*/
var radiologia = [
    {hora:"11:00",especialista:"IGNACIO SCHULZ",paciente:"FRANCISCA ROJAS",rut:"9878782-1",prevision:"FONASA"},
    {hora:"11:30",especialista:"FEDERICO SUBERCASEAUX",paciente:"PAMELA ESTRADA",rut:"15345241-3",prevision:"ISAPRE"},
    {hora:"15:00",especialista:"FERNANDO WURTHZ",paciente:"ARMANDO LUNA",rut:"16445345-9",prevision:"ISAPRE"},
    {hora:"15:30",especialista:"ANA MARIA GODOY	",paciente:"MANUEL GODOY",rut:"17666419-0",prevision:"FONASA"},
    {hora:"16:00",especialista:"PATRICIA SUAZO",paciente:"RAMON ULLOA",rut:"14989389-K",prevision:"FONASA"},
];

/*REQUERIMIENTO 2: Eliminar el primer y último elemento del arreglo de Radiología*/
radiologia.shift();
radiologia.pop();
console.log=(radiologia);

/*TABLA RADIOLOGIA*/
document.getElementById("tituloRadiologia").innerHTML = "TABLA RADIOLOGÍA";
var rellenarDatosradiologia= "";
var encabezados = `<tr>
                <th>Hora</th>
                <th>Especialista</th>
                <th>Paciente</th>
                <th>Rut</th>
                <th>Prevision</th>
    </tr>`;

rellenarDatosradiologia += encabezados;
for ( var i=0; i<radiologia.length; i++) {
    rellenarDatosradiologia += `
        <tr>
            <td>${radiologia[i].hora}</td>
            <td>${radiologia[i].especialista}</td>
            <td>${radiologia[i].paciente}</td>
            <td>${radiologia[i].rut}</td>
            <td>${radiologia[i].prevision}</td>
        </tr>
    `
}
document.getElementById("tablaRadiologia").innerHTML = rellenarDatosradiologia;


/*ARREGLO TRAUMATOLOGIA*/
var traumatologia = [
    {hora:"08:00",especialista:"MARIA PAZ ALTUZARRA",paciente:"PAULA SANCHEZ",rut:"15554774-5",prevision:"FONASA"},
    {hora:"10:00",especialista:"RAUL ARAYA",paciente:"ANGÉLICA NAVAS",rut:"115444147-9",prevision:"ISAPRE"},
    {hora:"10:30",especialista:"MARIA ARRIAGADA",paciente:"ANA KLAPP",rut:"17879423-9",prevision:"ISAPRE"},
    {hora:"11:00",especialista:"ALEJANDRO BADILLA",paciente:"FELIPE MARDONES",rut:"1547423-6",prevision:"ISAPRE"},
    {hora:"11:30",especialista:"CECILIA BUDNIK",paciente:"DIEGO MARRE",rut:"16554741-K",prevision:"FONASA"},
    {hora:"12:00",especialista:"ARTURO CAVAGNARO",paciente:"CECILIA MENDEZ",rut:"9747535-8",prevision:"ISAPRE"},
    {hora:"12:30",especialista:"ANDRES KANACRI",paciente:"MARCIAL SUAZO",rut:"11254785-5",prevision:"ISAPRE"},
];

/*REQUERIMIENTO 1: Agregar las siguientes horas al arreglo de Traumatología*/
traumatologia.push(
    {hora:"09:00",especialista:"RENE POBLETE",paciente:"ANA GELLONA",rut:"13123329-7",prevision:"ISAPRE"},
    {hora:"09:30",especialista:"MARIA SOLAR",paciente:"RAMIRO ANDRADE",rut:"12221451-K",prevision:"FONASA"},
    {hora:"10:00",especialista:"RAUL LOYOLA",paciente:"CARMEN ISLA",rut:"10112348-3",prevision:"ISAPRE"},
    {hora:"10:30",especialista:"ANTONIO LARENAS",paciente:"PABLO LOAYZA",rut:"13453234-1",prevision:"ISAPRE"},
    {hora:"12:00",especialista:"MATIAS ARAVENA",paciente:"SUSANA POBLETE",rut:"14345656-6",prevision:"FONASA"},
);


/*TABLA TRAUMATOLOGIA*/
document.getElementById("tituloTraumatologia").innerHTML = "TABLA TRAUMATOLOGÍA";
var rellenarDatostraumatologia= "";
var encabezados = `<tr>
                <th>Hora</th>
                <th>Especialista</th>
                <th>Paciente</th>
                <th>Rut</th>
                <th>Prevision</th>
    </tr>`;
    rellenarDatostraumatologia += encabezados;
    for ( var i=0; i<traumatologia.length; i++) {
        rellenarDatostraumatologia += `
    <tr>
            <td>${traumatologia[i].hora}</td>
            <td>${traumatologia[i].especialista}</td>
            <td>${traumatologia[i].paciente}</td>
            <td>${traumatologia[i].rut}</td>
            <td>${traumatologia[i].prevision}</td>
        </tr>
    `
}

document.getElementById("tablaTraumatologia").innerHTML = rellenarDatostraumatologia;

/*ARREGLO DENTAL*/
var dental = [
    {hora:"08:30",especialista:"ANDREA ZUÑIGA",paciente:"MARCELA RETAMAL",rut:"11123425-6",prevision:"ISAPRE"},
    {hora:"11:00",especialista:"MARIA PIA ZAÑARTU",paciente:"ANGEL MUÑOZ",rut:"9878789-2",prevision:"ISAPRE"},
    {hora:"11:30",especialista:"SCARLETT WITTING",paciente:"MARIO KAST",rut:"7998789-5",prevision:"FONASA"},
    {hora:"13:00",especialista:"FRANCISCO VON TEUBER",paciente:"KARIN FERNANDEZ",rut:"18887662-K",prevision:"FONASA"},
    {hora:"13:30",especialista:"EDUARDO VIÑUELA	HUGO",paciente:"HUGO SANCHEZ",rut:"17665461-4",prevision:"FONASA"},
    {hora:"14:00",especialista:"RAQUEL VILLASECA",paciente:"ANA SEPULVEDA",rut:"14441281-0",prevision:"ISAPRE"},
];

/*TABLA DENTAL*/
document.getElementById("tituloDental").innerHTML = "TABLA DENTAL";

var rellenarDatosTabla = "";

var encabezados = `<tr>
                <th>Hora</th>
                <th>Especialista</th>
                <th>Paciente</th>
                <th>Rut</th>
                <th>Prevision</th>
    </tr>`;

rellenarDatosTabla += encabezados;

for (var i = 0; i < dental.length; i++) {
    rellenarDatosTabla += `
        <tr>
            <td>${dental[i].hora}</td>
            <td>${dental[i].especialista}</td>
            <td>${dental[i].paciente}</td>
            <td>${dental[i].rut}</td>
            <td>${dental[i].prevision}</td>
        </tr>
    `
}

document.getElementById("tabla").innerHTML = rellenarDatosTabla;


/*REQUERIMIENTO 3: la lista de consultas médicas de Dental. Debe hacerlo
separando por un guión cada dato desplegado y cada fila de información debe estar
separada por un párrafo*/
dental.forEach((d) => {
    document.getElementById(
    "listadoConsultaDental"
    ).innerHTML += `</b> ${d.hora} - </b> ${d.especialista} - </b> ${d.paciente} - </b> ${d.rut} - </b> ${d.prevision}<br>`;
});


/*REQUERIMIENTO 4: listado total de todos los pacientes que se atendieron en el centro médico. 
Deberá unir todos los nombres de pacientes e imprimir uno por cada párrafo*/
let todosLosPacientes = radiologia.concat(dental,traumatologia);

todosLosPacientes.forEach(function (paciente) {
    document.getElementById(
        "listadoFinalPacientes"
    ).innerHTML += `${paciente.paciente}<br>`;
});


/*REQUERIMIENTO 5: Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas
de Dental*/
let pacientesIsapre = dental.filter(function (cita) {
    return cita.prevision === "ISAPRE";
});

pacientesIsapre.forEach(function (paciente) {
    document.getElementById(
        "pacientesIsapre"
    ).innerHTML += `${paciente.paciente} - ${paciente.prevision}<br>`;
});


/*REQUERIMIENTO 6: Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas médicas
de Traumatología*/
let pacientesFonasa = traumatologia.filter(function (cita) {
    return cita.prevision === "FONASA";
});

pacientesFonasa.forEach(function (paciente) {
    document.getElementById(
"listadoTraumaFonasa"
    ).innerHTML += `${paciente.paciente} - ${paciente.prevision}<br>`;
});


document.write(`<p>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length -1].paciente} - ${radiologia[radiologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length -1].paciente} - ${traumatologia[traumatologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length -1].paciente} - ${dental[dental.length -1].prevision}.</p>`);

document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);
