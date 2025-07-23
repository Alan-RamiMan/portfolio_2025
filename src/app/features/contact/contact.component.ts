import { Component, inject, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    user_name: ['', [Validators.required, Validators.minLength(2)]],
    user_email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  @ViewChild('contactForm') contactFormRef!: ElementRef<HTMLFormElement>;

  sending = false;
  success: boolean | null = null;

  sendEmail() {
    if (!this.form.valid) return;

    this.sending = true;
    this.success = null;

    emailjs
      .sendForm(
        'service_5rh3997',
        'template_u3l40n9',
        this.contactFormRef.nativeElement,
        { publicKey: 'riFgE9DbhddxFeefp' }
      )
      .then(() => {
        this.success = true;
        this.form.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        this.success = false;
      })
      .finally(() => {
        this.sending = false;
      });
  }
}
