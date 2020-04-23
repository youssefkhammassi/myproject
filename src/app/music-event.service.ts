import { Injectable } from '@angular/core';
import { MusicEvent } from './MusicEvent';

@Injectable({
  providedIn: 'root'
})
export class MusicEventService {
  events: MusicEvent[] = [{
    id: 0,
    name: 'Siccajazz',
    date: new Date ('03/19/2020'),
    price: 22,
    // tslint:disable-next-line: max-line-length
    description: 'Le Tunisia Siccaveneria International Jazz Festival « SICCA JAZZ[1] » est un festival international tunisien de Jazz et de world music se déroulant au mois de Mars de chaque année, depuis 2015, à la ville du Kef',
    // tslint:disable-next-line: max-line-length
    imageSrc: 'https://i2.wp.com/tunivisions.net/wp-content/uploads/2020/02/Sicca-Jazz-Affiche-1.jpg?fit=679%2C420&ssl=1',
  }, {
    id: 1,
    name: 'Jazz à Carthage',
    date: new Date ('06/19/2020'),
    price: 202,
    // tslint:disable-next-line: max-line-length
    description: 'Jazz à Carthage est un projet un peu fou né en 2005, grâce à la ténacité et à la passion d’un homme pour la musique et le jazz, Mourad Mathari. Depuis, le mois d’avril en Tunisie est devenu une saison à part entière, la saison du jazz. /n 15 ans et quelques centaines d’artistes plus tard, venant de toute la planète, le festival a grandi, s’est adapté, enrichi et a épuré sa vision.',
    // tslint:disable-next-line: max-line-length
    imageSrc: 'https://www.marhba.com/images/culture/culture2020/jac2.jpg',
  }, {
    id: 2,
    name: 'International Sand Sculpture Festival, Portugal',
    date: new Date ('06/08/2020'),
    price: 30,
    // tslint:disable-next-line: max-line-length
    description: 'International sand sculpture festival or FIESA is the largest sand sculpture event in the world.',
    // tslint:disable-next-line: max-line-length
    imageSrc: 'https://themysteriousworld.com/wp-content/uploads/2014/08/Fiesa.webp',
  }, {
    id: 3,
    name: 'Harbin International Ice and Snow Sculpture Festival, China',
    date: new Date ('03/19/2020'),
    price: 56,
    // tslint:disable-next-line: max-line-length
    description: 'It is the largest ice and snow festival in the world take place in Harbin of Heilongjiang province of China. This festival is officially held from January 5 to February 5 every year.',
    // tslint:disable-next-line: max-line-length
    imageSrc: 'https://themysteriousworld.com/wp-content/uploads/2014/08/Ice.webp',
  }, {
    id: 4,
    name: 'Carnival Of Venice, Italy',
    date: new Date ('07/29/2020'),
    price: 450,
    // tslint:disable-next-line: max-line-length
    description: 'Carnival of Venice is one the biggest festivals in Italy. In Italian this festival is known as Carnevale di Venezia , also called as Carnevale.',
    // tslint:disable-next-line: max-line-length
    imageSrc: 'https://themysteriousworld.com/wp-content/uploads/2014/08/Venice.webp',
  }];

  constructor() { }

  GetMusicEvents(): MusicEvent[] {
    return  this.events;
  }
  GetMusicEvent(id: number): MusicEvent {
    return  this.events.find(item => item.id === id);
  }
  AddMusicEvent(musicevent: MusicEvent) {
    musicevent.id = this.events.length;
    this.events.push(musicevent);
  }
}
