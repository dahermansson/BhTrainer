/// <reference path="comms.ts" />

var comm;
            var autoMode = false;
            var timer;

            function GetAndShowNew(){
                GetRandomComm();
                ShowTarget();
            }

            function GetRandomComm() {
                var oldcomm = comm;
                while(oldcomm ==comm){
                    comm = comms[Math.floor(Math.random() * comms.length)]
                }
            }

            function ShowTarget(){
                if(comm == null)
                    GetRandomComm();
                document.getElementById("target").innerHTML = comm.FTarget + comm.STarget;
                if(document.getElementById("cbShow").checked)
                    document.getElementById("case").innerHTML = comm.Case;
                else
                    document.getElementById("case").innerHTML = '';
           }

            function Auto(){
                if(document.getElementById("cbAuto").checked){
                    var time = document.getElementById("time").value
                    timer = setInterval(GetAndShowNew, time * 1000);
                    autoMode = true;
                }
                else
                {
                    clearInterval(timer);
                    autoMode = false;
                }
            }
            
            function ShowComm(){
                if(comm == null){
                    GetAndShowNew();
                }	
                document.getElementById("case").innerHTML = comm.Case;
                setTimeout(FocusNew,100);
            }

            function FocusNew(){
                document.getElementById('btnNew').focus()
            }

            function keyUp(event){
                if(event.keyCode == 32 && !autoMode)
                    GetAndShowNew();
            }