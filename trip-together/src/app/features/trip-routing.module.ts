import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { AuthActivate } from '../shared/guards/authActivate';


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
                title: 'Details Page'
            },
            {
                path: 'edit/:id',
                component: EditComponent,
                title: 'Edit Page'
            },
            {
                path: 'create',
                component: CreateComponent,
                title: 'Create trip',
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