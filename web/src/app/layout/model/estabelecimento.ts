export class Estabelecimento {
	private id_estabelecimento;
	public unidade;
	public endereco;
	public id_empresa;
	public horario_inicio;
	public horario_fim;
	public hora;
	public valor_hora;

	constructor( 
		unidade,
		endereco,
		id_empresa,
		horario_fim,
		horario_inicio,
		hora,
		valor_hora
	){
		this.unidade = unidade;
		this.endereco = endereco;
		this.id_empresa = id_empresa;
		this.horario_inicio = horario_inicio;
		this.horario_fim = horario_fim;
		this.hora = hora;
		this.valor_hora = valor_hora;
	}

}
