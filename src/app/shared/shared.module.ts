import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardImgComponent } from './components/card-img/card-img.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';

@NgModule({
  declarations: [SidebarComponent, CardImgComponent, LazyImageComponent],
  imports: [CommonModule],
  exports: [SidebarComponent, CardImgComponent, LazyImageComponent],
})
export class SharedModule {}
