import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PageModule } from '@abp/ng.components/page';
import CustomStore from 'devextreme/data/custom_store';
import { SharedModule } from 'src/app/shared/shared.module';
 import { DxDataGridModule } from 'devextreme-angular';
import { InterestBankLendingRatesService } from '../../../proxy/interest-bank-lending-rates';
import { loadOptionsStringify } from 'src/app/shared/helpers';

 

@Component({
  selector: 'app-interest-bank-lending-rate',
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: true,
  imports: [
 
SharedModule,
    PageModule,
    DxDataGridModule
 
  ],

  templateUrl: './interest-bank-lending-rate.component.html',
  styles: `::ng-deep.datatable-row-detail { background: transparent !important; }`,
})
export class InterestBankLendingRateComponent  {
  interestBankLendingRatesDataSource: CustomStore<any, any>;
  allowAdding:boolean=true;
  allowUpdating:boolean=true;
  allowDeleting:boolean=true;


  constructor(
    private interestBankLendingRatesService: InterestBankLendingRatesService,
     
  ) {

    } 
    async ngOnInit():  Promise<void> {
    this.interestBankLendingRatesDataSource = this.getInterestBankLendingRatesDataSource();
  }
  
 
  getInterestBankLendingRatesDataSource = (): CustomStore => {
    return new CustomStore({
      key: "id",
      load: async (loadOptions) => {
        console.log(loadOptions)
        return this.interestBankLendingRatesService.getList(await loadOptionsStringify(loadOptions)).toPromise().then(result => {
          console.log(result);
          return result;
        }).catch(() => { throw 'LoadingError'; });
      },
      insert: (values) => {
         return this.interestBankLendingRatesService.create(values).toPromise();
      },
      update: (key, values) => {
        return this.interestBankLendingRatesService.update(key, values).toPromise();
      },
      remove: (key) => {
        return this.interestBankLendingRatesService.delete(key).toPromise();
      },
      byKey: (key) => {
        return this.interestBankLendingRatesService.get(key)
            .toPromise();
    }
    });
  }
}