import { Component, OnInit } from '@angular/core';
import { SliderType } from "igniteui-angular";
import { MatDialog, MatDialogConfig } from "@angular/material";

import { Media } from '../media';
import { MediasService } from '../medias.service';
import { EditMediaDialogComponent } from './edit-media-dialog/edit-media-dialog.component'

@Component({
  selector: 'app-search-media',
  templateUrl: './search-media.component.html',
  styleUrls: ['./search-media.component.css']
})
export class SearchMediaComponent implements OnInit {
  medias: Media[];
  searchValue: String = "";
  public sliderType = SliderType;
  public priceRange: PriceRange = new PriceRange(1800, 2020);

  constructor(
    private mediasService: MediasService,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getMedias();
  }

  getMedias(): void {
    this.mediasService.getMedias().subscribe(medias => this.medias = medias);
  }

  setSearchValue(searchValue) {
    this.searchValue = searchValue;
  }

  searchMedias(media) {
    if ((media.originalTitle.toLowerCase().includes(this.searchValue) || media.primaryTitle.toLowerCase().includes(this.searchValue)) && (this.priceRange.lower <= media.startYear && this.priceRange.upper >= media.startYear)) {
      return true;
    }
  }

  openMediaDialog(media): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '600px';
    dialogConfig.data = {
      media: media
    }

    this.dialog.open(EditMediaDialogComponent, dialogConfig);
  }
}

class PriceRange {
  constructor(
    public lower: number,
    public upper: number
  ) { }
}
