import { Component, ViewContainerRef,ComponentFactoryResolver } from '@angular/core';
import { ConfirmationDialogComponent} from './confirmation-dialog/confirmation-dialog.component'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  nameList: string[];
  name: string;
  constructor(private viewContainerRef:ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {
    this.nameList = ['ks', 'sooriya', 'ksooriya'];
  }
  openConfirmationDialog() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(ConfirmationDialogComponent)
    const componentRef = this.viewContainerRef.createComponent(factory);
    componentRef.instance.onOk.subscribe(()=> {
      if(this.nameList.length > 0) {
        this.nameList.pop();
      }
      componentRef.destroy();
    });
    componentRef.instance.onCancel.subscribe(()=> {
      componentRef.destroy();
    });
  }

  openConfirmationAddDialog(){
    const factory = this.componentFactoryResolver.resolveComponentFactory(ConfirmationDialogComponent)
    const componentRef = this.viewContainerRef.createComponent(factory);
    componentRef.instance.onOk.subscribe(()=> {
      this.nameList.push(this.name);
      this.name= '';
      componentRef.destroy();
    });
    componentRef.instance.onCancel.subscribe(()=> {
      this.name= '';
      componentRef.destroy();
    });
  }
}
