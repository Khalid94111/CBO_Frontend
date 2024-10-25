import { eLayoutType, RoutesService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';

export const INTEREST_BANK_LENDING_RATES_INTEREST_BANK_LENDING_RATE_ROUTE_PROVIDER = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

function configureRoutes(routes: RoutesService) {
  return () => {
    routes.add([
      {
        path: '/interest-bank-lending-rates',
        iconClass: 'fas fa-percent',
        name: '::Menu:InterestBankLendingRates',
        layout: eLayoutType.application,
        requiredPolicy: 'CBO.InterestBankLendingRates',
      },
    ]);
  };
}
