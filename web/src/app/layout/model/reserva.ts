export class Reserva {
	private id_reserva;
	public id_cliente;
	public id_veiculo;
	public id_vaga;
	public situacao;
	public hora_entrada = ""; //time
	public hora_saida = ""; //time
	public data_efetuada; //date
	public hora_marcada = ""; //time
	public tempo_atraso = ""; //time
	public preco = "";
	public pago = "";

	constructor( 
		id_cliente,
		id_veiculo,
		id_vaga,
		data_efetuada,
		hora_marcada
	){
		this.id_cliente = id_cliente;
		this.id_veiculo = id_veiculo;
		this.id_vaga = id_vaga;
		this.data_efetuada = data_efetuada;
		this.hora_marcada = hora_marcada;
	}

}
