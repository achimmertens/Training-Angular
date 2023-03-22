import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { MonthNavigatorComponent } from './components/month-navigator/month-navigator.component';
import { AppointmentDetailsPageComponent } from './pages/appointment-details-page/appointment-details-page.component';
import { CreateAppointmentPageComponent } from './pages/create-appointment-page/create-appointment-page.component';
import { PlaygroundPageComponent } from './pages/playground-page/playground-page.component';
import { TelekomDatePipe } from './pipes/event-date.pipe';
import { AppointmentService } from './services/appointment.service';

export const testModule = {
  declarations: [
    AppComponent,
    EventListComponent,
    TelekomDatePipe,
    MonthNavigatorComponent,
    CreateAppointmentPageComponent,
    PlaygroundPageComponent,
    AppointmentDetailsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [AppointmentService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
};
