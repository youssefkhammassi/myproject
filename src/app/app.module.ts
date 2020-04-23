import { MusicEventComponent } from './music-event/music-event.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { PriceRangePipe } from './price-range.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WebcamModule} from 'ngx-webcam';
import { TakePhotoComponent } from './take-photo/take-photo.component';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import { MusicEventListComponent } from './music-event-list/music-event-list.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddMusicEventComponent } from './add-music-event/add-music-event.component';
import { MusicEventDetailsComponent } from './music-event-details/music-event-details.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import { SubmitInfosComponent } from './submit-infos/submit-infos.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { MatStepperModule } from '@angular/material/stepper';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicEventComponent,
    PriceRangePipe,
    TakePhotoComponent,
    LoginComponent,
    MusicEventListComponent,
    NotFoundComponent,
    AddMusicEventComponent,
    MusicEventDetailsComponent,
    SubmitInfosComponent,
    DialogOverviewExampleDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    WebcamModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatToolbarModule,
    MatStepperModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
    RouterModule.forRoot([{
      path: 'home', component: MusicEventListComponent
    } , {
      path: 'info', component: SubmitInfosComponent
    }, {
      path: 'login', component: LoginComponent
    } , {
      path: 'takePhoto', component: TakePhotoComponent
    } , {
      path: 'event/add', component: AddMusicEventComponent
    } , {
      path: 'event/:id', component: MusicEventDetailsComponent
    } , {
      path: '', redirectTo: 'home' , pathMatch: 'full'
    } , {
      path: '**', component: NotFoundComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
