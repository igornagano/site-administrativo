export class Cliente {
	private id_cliente;
	public id_usuario;
	public nome;
	public senha;
	public email;
	public cpf;
	public telefone;

	constructor( 
		nome,
		email,
		cpf,
		telefone,
		senha
	){
		this.nome = nome,
		this.email = email,
		this.senha = senha,
		this.cpf = cpf,
		this.telefone = telefone
	}

}
