import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  // leer el input (html) para capturar su valor

  // ViewChild: permite hacer referencia a un elemento html
  @ViewChild('valueInput')
  valueInputResult!: ElementRef<HTMLInputElement>;
  // ElementRef: permite hacer referencia a un elemento html

  constructor(private gifsService: GifsService) {}

  searchGifs() {
    let valueInput = this.valueInputResult.nativeElement.value;
    valueInput = valueInput.toLocaleLowerCase().trim();
    if (valueInput.length == 0) return;

    this.gifsService.addSearchTag(valueInput);
    this.getGifs(valueInput);
    this.valueInputResult.nativeElement.value = '';
  }

  getGifs(valueInput: string) {
    this.gifsService.getGifs(valueInput).subscribe({
      next: ({ data }) => {
        this.gifsService._gifList = [...data];
      },
    });
  }
}
