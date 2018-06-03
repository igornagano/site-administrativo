export class Estabelecimento {
	private id_estabelecimento;
	public unidade;
	public endereco;
	public id_empresa;

	constructor( 
		unidade,
		endereco,
		id_empresa
	){
		this.unidade = unidade;
		this.endereco = endereco;
		this.id_empresa = id_empresa;
	}

}
