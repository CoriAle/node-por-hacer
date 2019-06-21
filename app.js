//const argv = require('yargs').argv;
 const argv = require('./config/yargs').argv;
 const porHacer = require('./por-hacer/por-hacer');
 const colors = require('colors');

let comando = argv._[0];
console.log("argv", argv);

switch (comando) {
	case 'crear':
		let tarea = porHacer.crear(argv.descripcion);
		console.log("tarea", tarea);
		// statements_1
		break;
	case 'listar':
		let listado = porHacer.getListado();
		for (let tarea of listado) {
			console.log("============POR HACER==================".green)
			console.log(tarea.descripcion);
			console.log("Estado: ", tarea.completado);
			console.log("========================================".green)


			// statement
		}
		console.log("Mostrar todas las tareas por hacer");
		// statements_1
		break;
	case 'actualizar':
		let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
		console.log("actualizado", actualizado);
		// statements_1
		break;
	case 'borrar':
		let borrado = porHacer.borrar(argv.descripcion);
		console.log("borrado", borrado);
		// statements_1
		break;
	default:
		console.log("Comando no reconocido");
		// statements_def
		break;
}