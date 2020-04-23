import { Component } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

export interface StepType {
  label: string;
  fields: FormlyFieldConfig[];
}

@Component({
  selector: 'app-submit-infos',
  templateUrl: './submit-infos.component.html',
  styleUrls: ['./submit-infos.component.scss']
})
export class SubmitInfosComponent {

  constructor() { }
  activedStep = 0;

  model = {};
  steps: StepType[] = [
    {
      label: 'Personal data',
      fields: [
        {
          key: 'firstname',
          type: 'input',
          templateOptions: {
            label: 'First Name',
            required: true,
          },
        },
        {
          key: 'lastname',
          type: 'input',
          templateOptions: {
            label: 'Last Name',
            required: true,
          },
        },
      ],
    },
    {
      label: 'Email',
      fields: [
        {
          key: 'country',
          type: 'input',
          templateOptions: {
            type: 'email',
            label: 'Email',
            required: true,
          },
        },
      ],
    },
    {
      label: 'Photo',
      fields: [
        {
          key: 'day',
          type: 'input',
          templateOptions: {
            type: 'date',
            label: 'Day of the trip',
            required: true,
          },
        }, {
          key: 'agree',
          type: 'checkbox',
          templateOptions: {
            label: 'Agree to Conditions' ,
            required: true,
          },
        },
      ],
    },
  ];

  form = new FormArray(this.steps.map(() => new FormGroup({})));
  // tslint:disable-next-line: no-angle-bracket-type-assertion
  options = this.steps.map(() => <FormlyFormOptions> {});

  prevStep(step) {
    this.activedStep = step - 1;
  }

  nextStep(step) {
    this.activedStep = step + 1;
  }

  submit() {
    alert(JSON.stringify(this.model));
  }
}
