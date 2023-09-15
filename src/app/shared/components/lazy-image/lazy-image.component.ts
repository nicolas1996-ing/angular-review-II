import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css'],
})
export class LazyImageComponent implements OnInit {
  @Input() urlImage!: string;
  @Input() altImg: string = '';

  showLoader: boolean = true;
  ngOnInit(): void {
    if (this.urlImage === undefined) {
      throw new Error('Attribute urlImage is required');
    }
  }

  onLoadedImg() {
    setTimeout(() => {
      this.showLoader = false;
    }, 100);
  }
}
