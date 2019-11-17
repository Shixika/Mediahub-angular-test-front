import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { MediasService } from '../../services/medias.service';
import { Media } from '../../services/media';

@Component({
  selector: 'app-edit-media-dialog',
  templateUrl: './edit-media-dialog.component.html',
  styleUrls: ['./edit-media-dialog.component.css']
})
export class EditMediaDialogComponent implements OnInit {
  media: Media;
  titleValue: string;
  yearValue: number;
  genreValue: string;

  constructor(
    public dialogRef: MatDialogRef<EditMediaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private mediasService: MediasService) {}

  editMedia() {
    this.media.originalTitle = this.titleValue;
    this.media.startYear = this.yearValue;
    this.media.genres = this.genreValue;

    console.log(this.media);

    this.mediasService.updateMedia(this.media)
      .subscribe(
        () => this.dialogRef.close(),
        error => console.log(error),
        () => console.log('update saved')
      );
  }

  onKeydown(event: any) {
    this.dialogRef.close();
  }

  checkValue() {
    if (this.titleValue.length > 0 && this.yearValue && this.genreValue.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
    this.media = this.data.media;
    this.titleValue = this.media.originalTitle ? this.media.originalTitle : '';
    this.yearValue = this.media.startYear ? this.media.startYear : 0;
    this.genreValue = this.media.genres ? this.media.genres : '';
  }
}
