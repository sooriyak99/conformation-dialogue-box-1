import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

  title = 'Confirmation Dialog';
  message = 'Are you shore?';
  btnCancelText = 'Cancel';
  btnOkText = 'Ok';
  constructor() { }
  @Output() onOk = new EventEmitter<void>();
  @Output() onCancel = new EventEmitter<void>();
  ngOnInit() {
  }

  decline(){
    this.onCancel.emit();
  }

  accept(){
    this.onOk.emit();
  }

}