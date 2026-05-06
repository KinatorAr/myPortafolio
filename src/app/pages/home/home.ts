import { Component } from '@angular/core';
import { About } from '../../components/about/about';
import { Contact } from '../../components/contact/contact';
import { Hero } from '../../components/hero/hero';
import { Models } from '../../components/models/models';
import { Skills } from '../../components/skills/skills';
import { Nav } from '../../components/nav/nav';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [About, Contact, Hero, Models, Skills, Nav, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
