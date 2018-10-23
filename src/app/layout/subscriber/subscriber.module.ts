import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SubscriberRoutingModule} from './subscriber-routing.module';
import { SubscriberComponent} from './subscriber.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    SubscriberRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot(),
    PageHeaderModule
  ],
  declarations: [SubscriberComponent]
})
export class SubscriberModule { }
