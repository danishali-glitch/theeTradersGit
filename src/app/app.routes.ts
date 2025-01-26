import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ServiceComponent } from './component/service/service.component';
import { TeamComponent } from './component/team/team.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { GalleryComponent } from './component/gallery/gallery.component';



export const routes: Routes = [

    {
        path:'', pathMatch:'full', redirectTo:'home'
    },
    {
        path:'home', component:HomeComponent, title:'Thee Trader: Home'
    },
    {
        path:'aboutus', component:AboutusComponent, title:'Thee Trader: About-us'
    },
    {
        path:'service', component:ServiceComponent, title:'Thee Trader: Our Service'
    },
    {
        path:'team', component:TeamComponent, title:'Thee Trader: Our Team'
    },
    {
        path:'contactus', component:ContactusComponent, title:'Thee Trader: Contact-us'
    },
    {
        path:'gallery', component:GalleryComponent, title:'Thee Trader: Gallery'
    }
   
];

