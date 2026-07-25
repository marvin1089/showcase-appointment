import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  standalone: false,
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.css',
})
export class AppointmentList implements OnInit {

  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();

  appointments: Appointment[] = [];

  ngOnInit(): void {

    if (typeof window !== 'undefined') {

      const savedAppointments = localStorage.getItem('appointments');

      this.appointments = savedAppointments
        ? JSON.parse(savedAppointments)
        : [];
    }
  }

  addAppointment() {

    if (this.newAppointmentTitle.trim().length === 0) {
      return;
    }

    const newAppointment: Appointment = {
      id: Date.now(),
      title: this.newAppointmentTitle,
      date: this.newAppointmentDate
    };

    this.appointments.push(newAppointment);

    this.newAppointmentTitle = '';
    this.newAppointmentDate = new Date();

    if (typeof window !== 'undefined') {
      localStorage.setItem(
        'appointments',
        JSON.stringify(this.appointments)
      );
    }
  }

  deleteAppointment(index: number) {

    this.appointments.splice(index, 1);

    if (typeof window !== 'undefined') {
      localStorage.setItem(
        'appointments',
        JSON.stringify(this.appointments)
      );
    }
  }
}