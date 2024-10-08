import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrl: './core.component.scss'
})
export class CoreComponent {
  newServerName = '';
  newServerContent ='';

  @Output() serverCreated =new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintCreated =new EventEmitter<{serverName:string,serverContent:string}>();

  onAddServer()
  {
   this.serverCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
  }

  onAddBlueprint()
  {
    this.blueprintCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent})
  }
}
