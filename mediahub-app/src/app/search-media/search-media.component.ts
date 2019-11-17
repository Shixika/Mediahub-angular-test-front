import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
// import { SliderType } from "igniteui-angular";

import { Media } from '../services/media';
import { MediasService } from '../services/medias.service';
import { EditMediaDialogComponent } from './edit-media-dialog/edit-media-dialog.component';

@Component({
  selector: 'app-search-media',
  templateUrl: './search-media.component.html',
  styleUrls: ['./search-media.component.css']
})
export class SearchMediaComponent implements OnInit {
  medias: Media[];
  mediasSearch: Media[] = [];
  searchEmpty = '';
  // searchValue = '';
  // public sliderType = SliderType;
  // public priceRange: PriceRange = new PriceRange(1800, 2020);

  constructor(
    private mediasService: MediasService,
    public dialogService: MatDialog) {
  }

  openMediaDialog(selectedMedia: Media): void {
    const dialogRef = this.dialogService.open(EditMediaDialogComponent, {
      width: '600px',
      data: { media: selectedMedia }
    });
  }

  searchMedia(searchValue: string) {
    this.mediasSearch = []; // empty the mediasSearch array

    // Fill the media search array
    this.medias.map((media, index) => {
      const primaryTitle = media.primaryTitle.toLocaleLowerCase();
      const originalTitle = media.originalTitle.toLocaleLowerCase();
      searchValue = searchValue.toLocaleLowerCase();
      if (primaryTitle.includes(searchValue) || originalTitle.includes(searchValue)) {
        this.mediasSearch.push(media);
      }
    });

    if (this.mediasSearch.length > 0) {
      return this.searchEmpty = '';
    } else {
      return this.searchEmpty = searchValue;
    }
  }

  getSearch(searchValue) {
    return searchValue.length === 0 ? this.cancelSearch() : null;
  }

  cancelSearch() {
    this.mediasSearch = this.medias;
    this.searchEmpty = '';
  }

  ngOnInit(): void {
    this.mediasService.getMedias()
      .subscribe((results) => {
        this.medias = results;
        this.mediasSearch = results;
      });
  }
}
