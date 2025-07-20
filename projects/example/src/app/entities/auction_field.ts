import { MiaModel } from '@doroteati/mia-core';

export class AuctionField extends MiaModel {
  id: number = 0;
  auction_id: number = 0;
  type: number = 0;
  title: string = '';
  type_val: number = 0;
  val: string = '';
}
