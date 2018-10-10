import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss']
})
export class MessageDialogComponent {
title: string;
message: string;

  constructor(
    public dialogRef: MatDialogRef<MessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData: DialogData) {
      this.title = dialogData.title;
      this.message = dialogData.message;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

class DialogData {
  title: string;
  message: string;
}
