import { MiaModel } from '@doroteati/mia-core';
import { Auction } from './auction';

export class AuctionGroup extends MiaModel {
  static STATUS_DRAFT = 0;
  static STATUS_ACTIVE = 1;
  static STATUS_FINALIZED = 2;
  static STATUS_COMPLETED = 3;
  static STATUS_FINALIZED_WITH_VISUALIZATION = 4;
  static STATUS_PROGRAMMED_WITH_VISUALIZATION = 5;

  id: number = 0;
  title: string = '';
  code: string = '';
  type: number = 0;
  asset_type: number = 0;
  status: number = 0;
  visibility: number = 1;
  created_at: string = '';
  updated_at: string = '';
  end_date: string = '';
  deleted: number = 0;
  with_gso: number = 1;
  with_identity_validation: number = 1;

  auctions?: Array<Auction>;
}
