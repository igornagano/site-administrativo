export class Colaborador {
	private id_colaborador;
	public id_empresa;
	public id_usuario;

	constructor( 
		id_empresa,
		id_colaborador
	){
		this.id_empresa = id_empresa;
		this.id_colaborador = id_colaborador;
	}

}
