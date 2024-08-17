import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.scss'
})
export class ServerComponent {
  
  serverId:number = 10 ;
  serverStatus :string = "Online" ;
  allowAddServer :boolean =true;
  serverCreationStatus:string ="No server was created";
  serverName:string="TestServer";
  isServerCreated:boolean=false;
  isSpecial:boolean=true;
  isSuccess:boolean=true;
  servers=["TestServer1","TestServer2"];


  serverStyles={
    "background-color":"red",
    "color":"white",
    "font-style":"italic"
  }

  serverClasses = {
    "success":this.isSuccess,
    "special":this.isSpecial
  }

  getServerStatus()
  {
    if(this.serverStatus=="Online")
    {
      return "Our server is running"
    }
    else
    {
      return "Server is sleep";
    }
   
  }

  onCreateServer()
  {
    this.servers.push(this.serverName);
    this.isServerCreated=true;
    this.serverCreationStatus="Server Created Successfully";
  }

}
