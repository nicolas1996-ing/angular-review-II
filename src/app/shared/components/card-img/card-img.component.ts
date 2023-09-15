import { Component, Input, OnInit } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/getGifs.interface';

@Component({
  selector: 'app-card-img',
  templateUrl: './card-img.component.html',
  styleUrls: ['./card-img.component.css'],
})
export class CardImgComponent implements OnInit {
  @Input() gif!: Gif;
  ngOnInit(): void {
    if (this.gif === undefined) {
      throw new Error('gif is undefined');
    }
  }
}
