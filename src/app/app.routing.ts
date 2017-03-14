import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import{UserComponent} from './components/user.component';
import{AboutComponent} from './components/about.component';
import{d3Component} from './components/d3.component';

const appRoutes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'd3',
    component: d3Component
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
