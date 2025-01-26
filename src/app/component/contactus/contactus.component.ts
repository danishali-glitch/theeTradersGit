import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FooterComponent } from "../footer/footer.component";
import { FormsModule, NgForm } from '@angular/forms';
import { details } from '../modal/contact';

@Component({
  selector: 'app-contactus',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, FooterComponent,FormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {

  detail:details={
    name: '',
    location: '',
    email: '',
    phone: '',
    find: '',
    capital: '',
    experience: ''
  };


    submit(form:NgForm){

      console.log(form.value)

      const message = `
      Name: ${form.value.name}
      Location: ${form.value.location}
      Email: ${form.value.email}
      Phone: ${form.value.phone}
      Found us via: ${form.value.find}
      Experience: ${form.value.experience}
      Capital: ${form.value.capital}
    `;
    const phoneNumber = '918787086928'; // Replace with recipient's WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');

    }

}
