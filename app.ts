
var algorithmTrainer = new AlgorithmTrainer(algorithms); 

            function GetAndShowNew(){
                algorithmTrainer.GetRandomAlgorithm();
                ShowTarget();
            }

            function ShowTarget(){
                if(algorithmTrainer.current == null)
                    algorithmTrainer.GetRandomAlgorithm();
                document.getElementById("target").innerHTML = algorithmTrainer.GetCurrentTargets();
                if(document.getElementById("cbShow").checked)
                    document.getElementById("algorithm").innerHTML = algorithmTrainer.current.Algorithm;
                else
                    document.getElementById("algorithm").innerHTML = '';
           }

            function AutoSwitch(){
                if(document.getElementById("cbAuto").checked){
                    algorithmTrainer.TurnOnOutoMode(document.getElementById("time").value);
                    algorithmTrainer.timer = setInterval(GetAndShowNew, algorithmTrainer.delay * 1000);
                }
                else
                {
                    algorithmTrainer.TurnOffOutoMode();
                    clearInterval(algorithmTrainer.timer);
                }
            }
            
            function ShowComm(){
                if(algorithmTrainer.current == null){
                    algorithmTrainer.GetRandomAlgorithm();
                }	
                document.getElementById("algorithm").innerHTML = algorithmTrainer.current.Algorithm;
                setTimeout(FocusNew,100);
            }

            function FocusNew(){
                document.getElementById('btnNew').focus()
            }

            function keyUp(event){
                if(event.keyCode == 32 && !algorithmTrainer.autoMode)
                    GetAndShowNew();
            }