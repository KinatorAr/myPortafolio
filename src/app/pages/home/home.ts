import { Component } from '@angular/core';
import { About } from '../../components/about/about';
import { Contact } from '../../components/contact/contact';
import { Hero } from '../../components/hero/hero';
import { Services } from '../../components/services/services';
import { Models } from '../../components/models/models';
import { Process } from '../../components/process/process';
import { Nav } from '../../components/nav/nav';

@Component({
  selector: 'app-home',
  imports: [About, Contact, Hero, Services, Models, Process, Nav],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
