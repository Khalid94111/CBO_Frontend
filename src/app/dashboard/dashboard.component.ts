import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-host-dashboard *abpPermission="'CBO.Dashboard.Host'"></app-host-dashboard>
    <app-tenant-dashboard *abpPermission="'CBO.Dashboard.Tenant'"></app-tenant-dashboard>
  `,
})
export class DashboardComponent {}
