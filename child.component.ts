import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() public ParentToChild:boolean=false;
  @Output() ChildToParent = new EventEmitter<Event>();
  public buttonClickedMethodToParent(e:Event):void{
    this.ChildToParent.emit(e);
  }
}
