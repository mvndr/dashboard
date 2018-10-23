import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SubscriberRoutingModule} from './subscriber-routing.module';
import { SubscriberComponent} from './subscriber.component';
import { PageHeaderModule } from '../../shared';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    SubscriberRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot(),
    PageHeaderModule,
    DataTablesModule
  ],
  declarations: [SubscriberComponent]
})
export class SubscriberModule { }
