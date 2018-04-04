export class Vaga {
	private id_vaga;
	public id_estabelecimento;
	public setor;
	public numero;
	public situacao;
	public tipo;

	constructor( 
		id_estabelecimento,
		setor,
		numero,
		situacao,
		tipo
	){
		this.id_estabelecimento = id_estabelecimento;
		this.setor = setor;
		this.numero = numero;
		this.situacao = situacao;
		this.tipo = tipo;

	}

}
