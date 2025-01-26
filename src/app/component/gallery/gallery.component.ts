import { Component, inject, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
;
import { title } from 'process';


@Component({
  selector: 'app-gallery',
  imports: [FooterComponent, CommonModule, FooterComponent],

  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {


  photos: any = [
    {
      title: '1',
      imag: 'assets/images/1.jpeg'
    },
    {
      title: '2',
      imag: 'assets/images/2.jpeg'
    },
    {
      title: '3',
      imag: 'assets/images/3.jpeg'
    },
    {
      title: '4',
      imag: 'assets/images/4.jpeg'
    },
    {
      title: '5',
      imag: 'assets/images/5.jpeg'
    },
    {
      title: '6',
      imag: 'assets/images/6.jpeg'
    },
    {
      title: '7',
      imag: 'assets/images/7.jpeg'
    },
    {
      title: '8',
      imag: 'assets/images/8.jpeg'
    },
    {
      title: '9',
      imag: 'assets/images/9.jpeg'
    },
    {
      title: '10',
      imag: 'assets/images/10.jpeg'
    },
    {
      title: '11',
      imag: 'assets/images/11.jpeg'
    },
    {
      title: '12',
      imag: 'assets/images/12.jpeg'
    },
    {
      title: '13',
      imag: 'assets/images/13.jpeg'
    },
    
    {
      title: '15',
      imag: 'assets/images/15.jpeg'
    },
    {
      title: '16',
      imag: 'assets/images/16.jpeg'
    },
    {
      title: '17',
      imag: 'assets/images/17.jpeg'
    },
    {
      title: '18',
      imag: 'assets/images/18.jpeg'
    },
    {
      title: '19',
      imag: 'assets/images/19.jpeg'
    },
    {
      title: '20',
      imag: 'assets/images/20.jpeg'
    },
    {
      title: '21',
      imag: 'assets/images/21.jpeg'
    },
    {
      title: '22',
      imag: 'assets/images/22.jpeg'
    },
    {
      title: '23',
      imag: 'assets/images/23.jpeg'
    },
    {
      title: '24',
      imag: 'assets/images/24.jpeg'
    },

    {
      title: '25',
      imag: 'assets/images/25.jpeg'
    },
    {
      title: '26',
      imag: 'assets/images/26.jpeg'
    },
    {
      title: '27',
      imag: 'assets/images/27.jpeg'
    },
    {
      title: '28',
      imag: 'assets/images/28.jpeg'
    },
  ]


  ngOnInit(): void {

  }



}
