export class Colaborador {
	private id_colaborador;
	public id_empresa;
	public id_usuario;
	public nome;
	public senha;
	public email;
	public cpf;
	public telefone;
	public id_estabelecimento;

	constructor( 
		nome,
		email,
		cpf,
		telefone,
		senha,
		id_empresa,
		id_colaborador,
		id_estabelecimento
	){
		this.nome = nome,
		this.email = email,
		this.senha = senha,
		this.cpf = cpf,
		this.telefone = telefone,
		this.id_empresa = id_empresa;
		this.id_colaborador = id_colaborador;
		this.id_estabelecimento = id_estabelecimento;
	}

}
