import { Component } from '@angular/core';

@Component({
  selector: 'app-chats-list',
  templateUrl: './chats-list.component.html',
  styleUrls: ['./chats-list.component.scss'],
})
export class ChatsListComponent {
  cards = [
    { name: 'GiGGI', message: 'Silenzio' },
    { name: 'Sergio', message: 'gigi non sta zitto' },
    { name: 'Kevin', message: 'gigi non sta zitto' },
    { name: 'Limo', message: 'gigi non sta zitto' },
    { name: 'Domenico', message: 'gigi non sta zitto' },
    { name: 'Mirko', message: 'gigi non sta zitto' },
    { name: 'Francesca', message: 'gigi non sta zitto' },
    { name: 'Giacomo', message: 'gigi non sta zitto' },
  ];
}
