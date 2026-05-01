import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactoForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      asunto: ['', Validators.required]
    });
  }

  enviarMensaje() {
    if (this.contactoForm.valid) {
      console.log('Datos del formulario:', this.contactoForm.value);
      // Aquí podrías integrar un servicio para enviar el correo
    }
  }

  irAWhatsApp() {
    const telefono = "5212212940553"; // Tu número sin espacios
    const mensaje = "Hola, vi tu portafolio y me gustaría platicar sobre un proyecto.";
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }
}
