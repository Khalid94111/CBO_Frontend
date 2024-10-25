import type { FullAuditedEntityDto } from '@abp/ng.core';

export interface InterestBankLendingRateDto extends FullAuditedEntityDto<string> {
  endOfPeriod?: string;
  amountInRO: number;
  interestRate: number;
}
