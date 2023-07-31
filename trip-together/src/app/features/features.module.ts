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
import { tripRoutingModule } from './trip-routing.module';
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './weather/weather.component';



@NgModule({
    declarations: [
        CatalogComponent,
        CreateComponent,
        EditComponent,
        DetailsComponent,
        SearchComponent,
        WeatherComponent
    ],
    exports: [
        CatalogComponent,
        CreateComponent,
        EditComponent,
        DetailsComponent,
        SearchComponent,
        WeatherComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatCardModule,
        MatGridListModule,
        tripRoutingModule,
        SharedModule,
        FormsModule
    ]
})
export class FeaturesModule { }
