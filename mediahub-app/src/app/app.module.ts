import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatIconModule,
  MatDialogModule
} from '@angular/material';
import { IgxSliderModule } from 'igniteui-angular';

import { AppComponent } from './app.component';
import { SearchMediaComponent } from './search-media/search-media.component';
import { EditMediaDialogComponent } from './search-media/edit-media-dialog/edit-media-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchMediaComponent,
    EditMediaDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests and returns simulated server responses.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    IgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    EditMediaDialogComponent
  ]
})
export class AppModule {
}
