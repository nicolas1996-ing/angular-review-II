import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/getGifs.interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent {
  @Input() public gifsList: Gif[] = [];
}
