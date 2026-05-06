import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  changeDetection: ChangeDetectionStrategy.OnPush
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
      // Aquí integrar un servicio para enviar el correo
      alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
      this.contactoForm.reset();
    }
  }

  irAWhatsApp() {
    const telefono = "5212212940553";
    const mensaje = "Hola, vi tu portafolio y me gustaría platicar sobre un proyecto.";
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }
}
