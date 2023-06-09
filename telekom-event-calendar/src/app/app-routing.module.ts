import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list.component';
import { AppointmentDetailsPageComponent } from './pages/appointment-details-page/appointment-details-page.component';
import { CreateAppointmentPageComponent } from './pages/create-appointment-page/create-appointment-page.component';
import { PlaygroundPageComponent } from './pages/playground-page/playground-page.component';

const routes: Routes = [
  {
    path: '',
    component: EventListComponent,
  },
  {
    path: 'neu',
    component: CreateAppointmentPageComponent,
  },
  {
    path: 'appointment/:appointmentId',
    component: AppointmentDetailsPageComponent,
  },
  {
    path: 'playground',
    component: PlaygroundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
