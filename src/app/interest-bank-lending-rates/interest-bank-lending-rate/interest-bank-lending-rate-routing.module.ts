import { authGuard, permissionGuard } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterestBankLendingRateComponent } from './components/interest-bank-lending-rate.component';

export const routes: Routes = [
  {
    path: '',
    component: InterestBankLendingRateComponent,
    canActivate: [authGuard, permissionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterestBankLendingRateRoutingModule {}
