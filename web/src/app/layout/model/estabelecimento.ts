export class Estabelecimento {
	private id_estabelecimento;
	public unidade;
	public endereco;
	public horario_inicio
	public horario_fim
	public id_empresa;


	constructor( 
		unidade,
		endereco,
		horario_inicio,
		horario_fim
		id_empresa
	){
		this.unidade = unidade;
		this.endereco = endereco;
		this.horario_inicio = horario_inicio;
		this.horario_fim = horario_fim;
		this.id_empresa = id_empresa;
	}

}
