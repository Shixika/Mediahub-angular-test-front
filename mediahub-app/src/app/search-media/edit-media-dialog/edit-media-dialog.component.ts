import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-edit-media-dialog',
  templateUrl: './edit-media-dialog.component.html',
  styleUrls: ['./edit-media-dialog.component.css']
})
export class EditMediaDialogComponent implements OnInit {
  media;

  constructor(
    private dialogRef: MatDialogRef<EditMediaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.media = data.media;
    }

  ngOnInit() {
  }

  onKeydown(event) {
    this.dialogRef.close();
  }
}
