import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-simulation-form',
  templateUrl: './simulation-form.component.html',
  styleUrls: ['./simulation-form.component.scss']
})
export class SimulationFormComponent {
  form = new FormGroup({});
  model: any = {
    execs: [{}],
    queryParams: [{}],
    authHeaders: [{}],
  };
  options: FormlyFormOptions = {
    // formState: {
    //   awesomeIsForced: false,
    // },
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'simulationName',
      type: 'input',
      templateOptions: {
        label: 'Simulation Name',
        //placeholder: 'Formly is terrific!',
        required: true,
      },
    },
    {
      key: 'baseUrl',
      type: 'input',
      templateOptions: {
        label: 'Base URL',
        //placeholder: 'Formly is terrific!',
        required: true,
      },
    },
    {
      key: 'scenarioName',
      type: 'input',
      templateOptions: {
        label: 'Scenario Name',
        //placeholder: 'Formly is terrific!',
        required: true,
      },
    },
    {
      key: 'execs',
      type: 'repeat',
      name: 'exec',
      templateOptions: {
        label: 'Execs:',
        addText: 'Add Exec',
      },
      fieldArray: {
        fieldGroup: [
          {
            className: 'col-sm-4',
            type: 'input',
            key: 'requestName',
            templateOptions: {
              label: 'Request Name:',
              required: true,
            },
          },
          {
            key: 'requestTpe',
            type: 'select',
            defaultValue: 'get',
            templateOptions: {
              label: 'Request Type',
              options: [
                { label: 'GET', value: 'get' },
                { label: 'POST', value: 'post' },
                { label: 'PUT', value: 'put' },
                { label: 'DELETE', value: 'delete' }
              ],
              required: true
            },
          },
          {
            type: 'input',
            key: 'route',
            className: 'col-sm-4',
            templateOptions: {
              label: 'Route:',
              required: true
            },
          },
          {
            key: 'queryParams',
            type: 'repeat',
            name: 'Query Param',
            templateOptions: {
              label: 'Query Params:',
              addText: 'Add Query Parameter',
            },
            fieldArray: {
              fieldGroup: [
                {
                  className: 'col-sm-4',
                  type: 'input',
                  key: 'paramKey',
                  templateOptions: {
                    label: 'Parameter Key:'
                  },
                },
                {
                  className: 'col-sm-4',
                  type: 'input',
                  key: 'paramValue',
                  templateOptions: {
                    label: 'Parameter Value:'
                  },
                },
              ],
            },
          },
          {
            key: 'authHeaders',
            type: 'repeat',
            name: 'Authorization Header',
            templateOptions: {
              label: 'Authorization Header:',
              addText: 'Add Authorization Header',
            },
            fieldArray: {
              fieldGroup: [
                {
                  className: 'col-sm-4',
                  type: 'input',
                  key: 'headerName',
                  templateOptions: {
                    label: 'Header Name:'
                  },
                },
                {
                  className: 'col-sm-4',
                  type: 'input',
                  key: 'headerValue',
                  templateOptions: {
                    label: 'Header Value:'
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      className: 'col-sm-4',
      type: 'input',
      key: 'constantConcurrentUsers',
      templateOptions: {
        label: 'Constant Concurrent Users:',
        required: true,
      },
    },
    {
      className: 'col-sm-4',
      type: 'input',
      key: 'rampConcurrentUsersStart',
      templateOptions: {
        label: 'Constant Concurrent Users Start:',
        required: true,
      },
    },
    {
      className: 'col-sm-4',
      type: 'input',
      key: 'rampConcurrentUsersEnd',
      templateOptions: {
        label: 'Constant Concurrent Users End:',
        required: true,
      },
    },
    {
      className: 'col-sm-4',
      type: 'input',
      key: 'duration',
      templateOptions: {
        label: 'Duration:',
        required: true,
      },
    },
  ];

  onSubmit() {
    console.log('printing:');
    console.log(this.form.get('simulationName').value);
    console.log(this.form.get('execs').value[0].queryParams[0].paramKey);
    console.log(this.form.value);
  }



}
