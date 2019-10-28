import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  //_____String-Interpolation__________

  serverId: number = 10;
  serverStatus: string = "offline";

  getServerStatus(){
    return this.serverStatus;
  }

  //_____Property-Binding_____________

  allowNewServer = false;

  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000)
   }

   //____Event-Binding_________________

   allowNewHost = false;
   hostName = "";
   hostCreationStatus = "No host was created!";

   createHost(){
     this.hostCreationStatus = "Host was created!"
   }

   onUpdateHostName(event: any){
      this.hostName = (<HTMLInputElement>event.target).value;
   }

   //____Two-Way-Databinding____________

   proxyName ="";


  ngOnInit() {
  }

}
