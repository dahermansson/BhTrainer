/**
 * AlgorithmTrainer
 */
var AlgorithmTrainer = (function () {
    function AlgorithmTrainer(algorithmsFromJson) {
        this.algorithms = algorithmsFromJson;
        this.autoMode = false;
    }
    ;
    AlgorithmTrainer.prototype.GetCurrentTargets = function () {
        return this.current.FTarget + this.current.STarget;
    };
    AlgorithmTrainer.prototype.GetRandomAlgorithm = function () {
        this.previus = this.current;
        while (this.previus == this.current) {
            this.current = algorithms[Math.floor(Math.random() * algorithms.length)];
        }
    };
    AlgorithmTrainer.prototype.TurnOnOutoMode = function (time) {
        this.delay = time;
        this.autoMode = true;
    };
    AlgorithmTrainer.prototype.TurnOffOutoMode = function () {
        this.delay = -1;
        this.autoMode = false;
    };
    return AlgorithmTrainer;
}());
