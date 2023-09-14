import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  public ChildToParent:boolean=false;
  public ParentToChild=false;
  public buttonClickedMethodToChild():void{
    this.ParentToChild = true;
  }

  public buttonClickedMethodFromChild($event:any):void{
    this.ChildToParent = true;
  }
}
