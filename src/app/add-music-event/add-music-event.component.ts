import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MusicEventService } from '../music-event.service';
import { MusicEvent } from '../MusicEvent';

@Component({
  selector: 'app-add-music-event',
  templateUrl: './add-music-event.component.html',
  styleUrls: ['./add-music-event.component.scss']
})
export class AddMusicEventComponent implements OnInit {

  musicEventForm: FormGroup;
  constructor(private formbuilder: FormBuilder, private router: Router,
              private musicEventService: MusicEventService) {
    this.musicEventForm = this.formbuilder.group({
      Name: ['Initial value', [Validators.required, Validators.minLength(3)]],
      Price: ['', [Validators.required]],
      Description: ['', [Validators.required, Validators.minLength(15)]],
      Date: ['', [Validators.required]],
      ImageUrl: ['']
    });
  }

  ngOnInit() {
  }

  Save() {
    const musicevent: MusicEvent = {
      name: this.musicEventForm.controls.Name.value,
      price: this.musicEventForm.controls.Price.value,
      date: new Date(this.musicEventForm.controls.Date.value),
      imageSrc: this.musicEventForm.controls.ImageUrl.value,
      description: this.musicEventForm.controls.Description.value
    };
    this.musicEventService.AddMusicEvent(musicevent);
    this.router.navigate(['/home']);
  }

  Cancel() {
    this.router.navigate(['/home']);
  }

}
