export class Sensor {
	private id_sensor;
	public situacao;
	public id_vaga;
	public tempo_resposta;

	constructor( 
		id_vaga,
		situacao,
		tempo_resposta
	){
		this.id_vaga = id_vaga;
		this.situacao = situacao;
		this.tempo_resposta = tempo_resposta;
	}

}
