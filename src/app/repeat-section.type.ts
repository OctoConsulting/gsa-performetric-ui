import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-repeat-section',
  template: `
    <div *ngFor="let fg of field.fieldGroup; let i = index;" class="row">
      <formly-field class="col" [field]="fg"></formly-field>
      <div class="col-sm-2 d-flex align-items-center">
        <button *ngIf="!(field.name == 'exec' && i==0)"
        class="btn btn-danger"
        type="button" (click)="remove(i)">Remove {{field.name}}</button>
      </div>
    </div>
    <div style="margin:30px 0;">
      <button class="btn btn-primary" type="button" (click)="add()">{{ to.addText }}</button>
    </div>
  `,
})
export class RepeatTypeComponent extends FieldArrayType {}
