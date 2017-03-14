import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <ul>
  <li><a routerLink="/">Home</a></li>
  <li><a routerLink="/about">About</a></li>
  <li><a routerLink="/d3">D3</a></li>
  </ul>
  <div class="container-fluid">
  <!-- Page Heading -->
  <div class="row">
    <div class="col-xl-5">
      <h1 class="page-header">Teradata System Dashboard</h1>
    </div>
    <div class="col-xl-7">
      <ol class="breadcrumb">
        <li><a routerLink="/"><i class="fa fa-fw fa-home"></i>Home</a></li>
        <li><a routerLink="/d3"><i class="fa fa-fw fa-bar-chart-o"></i>Teradata Monitoring</a></li>
      </ol>
    </div>
  </div>

  <hr />
  <router-outlet></router-outlet>
  `,
})
export class AppComponent  {

}
