import type { InterestBankLendingRateDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { LoadResult } from '../dev-extreme/asp-net/data/response-model/models';
import type { DataSourceLoadOptions } from '../models';

@Injectable({
  providedIn: 'root',
})
export class InterestBankLendingRatesService {
  apiName = 'Default';
  

  create = (input: object, config?: Partial<Rest.Config>) =>
    this.restService.request<any, InterestBankLendingRateDto>({
      method: 'POST',
      url: '/api/app/interest-bank-lending-rates',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/interest-bank-lending-rates/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, InterestBankLendingRateDto>({
      method: 'GET',
      url: `/api/app/interest-bank-lending-rates/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (loadOptions: any, config?: Partial<Rest.Config>) =>
    this.restService.request<any, LoadResult>({
      method: 'GET',
      url: '/api/app/interest-bank-lending-rates',
      params: { requireTotalCount: loadOptions.requireTotalCount, requireGroupCount: loadOptions.requireGroupCount, isCountQuery: loadOptions.isCountQuery, isSummaryQuery: loadOptions.isSummaryQuery, skip: loadOptions.skip, take: loadOptions.take, sort: loadOptions.sort, group: loadOptions.group, filter: loadOptions.filter, totalSummary: loadOptions.totalSummary, groupSummary: loadOptions.groupSummary, select: loadOptions.select, preSelect: loadOptions.preSelect, remoteSelect: loadOptions.remoteSelect, remoteGrouping: loadOptions.remoteGrouping, expandLinqSumType: loadOptions.expandLinqSumType, primaryKey: loadOptions.primaryKey, defaultSort: loadOptions.defaultSort, stringToLower: loadOptions.stringToLower, paginateViaPrimaryKey: loadOptions.paginateViaPrimaryKey, sortByPrimaryKey: loadOptions.sortByPrimaryKey, allowAsyncOverSync: loadOptions.allowAsyncOverSync },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: object, config?: Partial<Rest.Config>) =>
    this.restService.request<any, InterestBankLendingRateDto>({
      method: 'PUT',
      url: `/api/app/interest-bank-lending-rates/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
