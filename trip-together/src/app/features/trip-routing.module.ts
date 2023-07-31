import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { AuthActivate } from '../shared/guards/authActivate';
import { SearchComponent } from './search/search.component';
import { WeatherComponent } from './weather/weather.component';


const routes: Routes = [
    {
        path: 'trip',
        children: [
            {
                path: 'catalog',
                component: CatalogComponent,
                title: 'Catalog Page'

            },
            {
                path: 'details/:id',
                component: DetailsComponent,
                title: 'Details Page',
               canActivate: [AuthActivate]
            },
            {
                path: 'edit/:id',
                component: EditComponent,
                title: 'Edit Page',
                canActivate: [AuthActivate]
            },
            {
                path: 'create',
                component: CreateComponent,
                title: 'Create Page',
                canActivate: [AuthActivate]
            },
            {
                path: 'search',
                component: SearchComponent,
                title: 'Search Page',
                canActivate: [AuthActivate]
            }
            ,
            {
                path: 'weather',
                component: WeatherComponent,
                title: 'Weather Page',
                canActivate: [AuthActivate]
            }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class tripRoutingModule { }