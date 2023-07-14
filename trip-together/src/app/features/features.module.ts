import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [
    CatalogComponent,
    CreateComponent,
    EditComponent,
    DetailsComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatGridListModule
  ],
  exports:[
    CatalogComponent,
    CreateComponent,
    EditComponent,
    DetailsComponent,
    SearchComponent

  ]
})
export class FeaturesModule { }
