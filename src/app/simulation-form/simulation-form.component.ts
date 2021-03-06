import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { SimulationService } from '../simulation.service';
import { Router, RouterEvent } from '@angular/router';


@Component({
  selector: 'app-simulation-form',
  templateUrl: './simulation-form.component.html',
  styleUrls: ['./simulation-form.component.scss']
})
export class SimulationFormComponent implements OnInit {

  constructor( private simulationService: SimulationService, private router: Router) {}
  buttonText: string;
  simulation: any;
  simulationId: any;
  scalaFileName: any;

  form = new FormGroup({});
  model: any = {
    steps: [{}],
    queryParams: [{}],
    authHeader: [{}],
  };
  options: FormlyFormOptions = {
    formState: {
      addLoadInformation: false,
    },
  };
  fields: FormlyFieldConfig[] = [
    {
      className: 'section-label',
      template: '<div><strong>Simulation Info</strong></div>',
    },
    {
      key: 'simulationName',
      type: 'input',
      templateOptions: {
        label: 'Simulation Name',
      },
    },
    {
      key: 'baseUrl',
      type: 'input',
      templateOptions: {
        label: 'Base URL',
        required: true,
      },
    },
    {
      key: 'scenarioName',
      type: 'input',
      templateOptions: {
        label: 'Scenario Name',
        required: true,
      },
    },
    {
      className: 'section-label test',
      template: '<br><br><div><strong>Performance Steps</strong></div><br>',
    },
    {
      key: 'steps',
      type: 'repeat',
      name: 'exec',
      templateOptions: {
        label: 'Execs',
        addText: 'Add Exec',
      },
      fieldArray: {
        fieldGroup: [
          {
            className: 'col-sm-4',
            type: 'input',
            key: 'executionName',
            templateOptions: {
              label: 'Execution Name',
              required: true,
            },
          },
          {
            key: 'requestType',
            type: 'select',
            defaultValue: 'get',
            templateOptions: {
              label: 'Request Type',
              options: [
                { label: 'GET', value: 'get' }
              ],
              required: true
            },
          },
          {
            type: 'input',
            key: 'route',
            className: 'col-sm-4',
            templateOptions: {
              label: 'Route',
              required: true
            },
          },
          {
            key: 'queryParams',
            type: 'repeat',
            name: 'Query Param',
            templateOptions: {
              label: 'Query Params',
              addText: 'Add Query Parameter',
            },
            fieldArray: {
              fieldGroup: [
                {
                  className: 'col-sm-4',
                  type: 'input',
                  key: 'paramName',
                  templateOptions: {
                    label: 'Parameter Name'
                  },
                },
                {
                  className: 'col-sm-4',
                  type: 'input',
                  key: 'paramValue',
                  templateOptions: {
                    label: 'Parameter Value'
                  },
                },
              ],
            },
          },
          {
            key: 'authHeader',
            type: 'repeat',
            name: 'Authorization Header',
            templateOptions: {
              label: 'Authorization Header',
              addText: 'Add Authorization Header',
            },
            fieldArray: {
              fieldGroup: [
                {
                  className: 'col-sm-4',
                  type: 'input',
                  key: 'headerKey',
                  templateOptions: {
                    label: 'Header Key'
                  },
                },
                {
                  className: 'col-sm-4',
                  type: 'input',
                  key: 'headerValue',
                  templateOptions: {
                    label: 'Header Value'
                  },
                },
              ],
            },
          },
          {
            className: 'col-sm-4',
            type: 'input',
            key: 'pause',
            templateOptions: {
              label: 'Pause',
              type: 'number',
              min: 0
            },
          },
        ],
      },
    },
    {
      className: 'section-label',
      template: '<div><strong>Load Information:</strong></div>',
    },
    {
      className: 'col-sm-4',
      type: 'input',
      key: 'constantConncurrentUsers',
      templateOptions: {
        label: 'Constant Concurrent Users',
        required: true,
      },
    },
    {
      fieldGroupClassName: 'grid-row grid-gap-md',
      fieldGroup: [
        {
          className: 'tablet:grid-col-3',
          type: 'input',
          key: 'constantConncurrentUserDuration',
          templateOptions: {
            label: 'Duration',
          },
        },
        {
          className: 'tablet:grid-col-2',
          key: 'durationTime',
          type: 'select',
          templateOptions: {
            label: 'Time',
            options: [
              { label: 'Minutes', value: 'minutes' },
              { label: 'Seconds', value: 'seconds' },
              { label: 'Miliseconds', value: 'miliseconds' }
            ],
            required: true
          },
        }
      ],
    },
    {
      key: 'awesome',
      type: 'checkbox',
      templateOptions: { label: '' },
      expressionProperties: {
        'templateOptions.disabled': 'formState.awesomeIsForced',
        'templateOptions.label': (model, formState) => {
          if (formState.awesomeIsForced) {
            return 'Add Additional Load Information';
          } else {
            return 'Add Additional Load Information';
          }
        },
      },
    },
    {
      key: 'rampConcurrentUsersStart',
      type: 'input',
      expressionProperties: {
        'templateOptions.disabled': 'formState.awesomeIsForced',
      },
      hideExpression: '!model.awesome',
      templateOptions: {
        label: 'Ramp Up Concurrent Users Start',
      },
    },
    {
      key: 'rampConcurrentUsersEnd',
      type: 'input',
      expressionProperties: {
        'templateOptions.disabled': 'formState.awesomeIsForced',
      },
      hideExpression: '!model.awesome',
      templateOptions: {
        label: 'Ramp Up Concurrent Users End',
      },
    },
    {
      fieldGroupClassName: 'grid-row grid-gap-md',
      fieldGroup: [
        {
          className: 'tablet:grid-col-3',
          type: 'input',
          key: 'rampUpDuration',
          expressionProperties: {
            'templateOptions.disabled': 'formState.awesomeIsForced',
          },
          hideExpression: '!model.awesome',
          templateOptions: {
            label: 'Ramp Up Duration',
          },
        },
        {
          className: 'tablet:grid-col-2',
          key: 'rampupTime',
          type: 'select',
          expressionProperties: {
            'templateOptions.disabled': 'formState.awesomeIsForced',
          },
          hideExpression: '!model.awesome',
          templateOptions: {
            label: 'Time',
            options: [
              { label: 'Minutes', value: 'minutes' },
              { label: 'Seconds', value: 'seconds' },
              { label: 'Miliseconds', value: 'miliseconds' }
            ]
          },
        }
      ],
    },
  ];

  ngOnInit() {
    this.buttonText = 'Generate';
  }

  onSubmit() {
    if (this.buttonText === 'Generate') {
      const copy = JSON.parse(JSON.stringify(this.form.value));
      copy.constantConncurrentUserDuration = copy.constantConncurrentUserDuration + ' ' + copy.durationTime;
      delete copy.durationTime;
      copy.rampUpDuration = copy.rampUpDuration + ' ' + copy.rampupTime;
      delete copy.rampupTime;
      console.log(copy);
      this.simulationService.createSimulation(copy).subscribe(
        data => {
          this.simulation = data;
          console.log(this.simulation);
          if (this.simulation.simulationFileName) {
            this.buttonText = 'Execute';
            this.simulationId = this.simulation.id;
            this.scalaFileName = this.simulation.simulationFileName;
          }
        }
      );
    }

    if (this.buttonText === 'Execute') {
      console.log(this.scalaFileName);
      console.log(this.simulationId);
      this.simulationService.executeSimulation(this.simulationId, this.scalaFileName).subscribe(
        data => {
          console.log(data);
          console.log(data.ok);
          if (data.status === 200) {
            console.log('Im Here');
            this.router.navigate(['/home', 'success']);
          } else{
            this.router.navigate(['/home', 'fail']);
          }
        },err =>{
          console.log('Im Error');
          this.router.navigate(['/home', 'success']);
        }
      );
    }
  }



}
