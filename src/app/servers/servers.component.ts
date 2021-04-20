import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer=false;
  serverCreationStatus='No server was created!';
  serverName= 'TestServer';
  serverCreated=false;
  servers=['Testserver','Testserver 2'];
showSecret=false;
log=[];
onToggleDetails(){
this.showSecret= !this.showSecret;
//this.log.push(this.log.length+1);
this.log.push(new Date());
}

  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus='Server was created!Name is '+this.serverName;
  }

  onUpdateServer(event:Event){
this.serverName=(<HTMLInputElement>event.target).value;
  }
}
