import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  @Output()
  public sendData = new EventEmitter<string>();

  // ngOnInit(){

  // }

  childMessage(){
    this.sendData.emit("This is for UST TVM Batch");
  }

}
