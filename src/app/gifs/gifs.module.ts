import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, SearchComponent, CardListComponent],
  imports: [CommonModule, SharedModule],
  exports: [HomeComponent],
})
export class GifsModule {}
