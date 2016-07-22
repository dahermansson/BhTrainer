/**
 * AlgorithmTrainer
 */
class AlgorithmTrainer {

    algorithms: Algorithm[];
    current: Algorithm;
    previus: Algorithm;
    autoMode: boolean;
    delay: number;
    timer;

    constructor(algorithmsFromJson: Algorithm[]) {
        this.algorithms = algorithmsFromJson;
        this.autoMode = false;
    };

    GetCurrentTargets(){
        return this.current.FTarget + this.current.STarget;
    }

    GetRandomAlgorithm() {
	    this.previus = this.current;
	    while(this.previus == this.current){
	        this.current = algorithms[Math.floor(Math.random() * algorithms.length)];
	        }
	    }

    TurnOnOutoMode(time: number){
        this.delay = time;
        this.autoMode = true;
    }

    TurnOffOutoMode(){
        this.delay = -1;
        this.autoMode = false;
    }
}