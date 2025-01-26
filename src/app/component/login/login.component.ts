import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { FormsModule, NgForm } from '@angular/forms';
import { details } from '../modal/contact';
@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule,  MatDialogModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

   detail:details={
      name: '',
      location: '',
      email: '',
      phone: '',
      find: '',
      capital: '',
      experience: ''
    };

  constructor(private modal: MatDialog) { }
  close() {
    this.modal.closeAll();
  }

  submit(form:NgForm){
  
        console.log(form.value)
  
        const message = `
        Name: ${form.value.name}
        Location: ${form.value.location}
        Email: ${form.value.email}
        Phone: ${form.value.phone}
        Found us via: ${form.value.find}
       
      `;
      const phoneNumber = '918787086928'; // Replace with recipient's WhatsApp number
      const encodedMessage = encodeURIComponent(message);
      const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(url, '_blank');
  
      }

}
