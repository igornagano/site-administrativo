export class Empresa {
	private id;
	public nome;
		public email;
		public cpf;
		public telefone;
		public nomeFantasia;
		public nomeProprietario;
		public cnpj;
	constructor( 
		nome,
		email,
		cpf,
		telefone,
		nomeFantasia,
		nomeProprietario,
		cnpj
	){
		this.nome = nome,
		this.email = email,
		this.cpf = cpf,
		this.telefone = telefone,
		this.nomeFantasia = nomeFantasia,
		this.nomeProprietario = nomeProprietario,
		this.cnpj = cnpj
	}

	setId(id){
		this.id = id;
	}
	getId(){
		return this.id;
	}
}
