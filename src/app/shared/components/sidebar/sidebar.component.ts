import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  // constantemente esta escuchando los cambios de tagHistory
  get tagHistory(): string[] {
    return [...this.gifsService.tagHistory];
  }

  getGif(tag: string) {
    this.gifsService.getGifs(tag).subscribe({
      next: ({ data }) => {
        this.gifsService._gifList = data;
      },
    });
  }
}
