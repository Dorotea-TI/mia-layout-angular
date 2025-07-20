import { MiaModel } from '@doroteati/mia-core';
import { AuctionField } from './auction_field';
import { AuctionGroup } from './auction_group';

export class Auction extends MiaModel {
  static ASSET_TYPE_HOUSE = 0;
  static ASSET_TYPE_COMMERCIAL = 1;
  static ASSET_TYPE_VEHICLES = 2;
  static ASSET_TYPE_SPECIALIZED = 3;

  static TYPE_ONLINE = 0;
  static TYPE_VIRTUAL_HAMMER = 1;
  static TYPE_ONSITE_HAMMER = 2;

  static VISIBILITY_CLOSED = 0;
  static VISIBILITY_PUBLIC = 1;

  static STATUS_DRAFT = 0;
  static STATUS_ACTIVE = 1;
  static STATUS_FINALIZED = 2;
  static STATUS_COMPLETED = 3;

  id: number = 0;
  group_id: number = 0;
  user_id: number = 0;
  title: string = '';
  code: string = '';
  start_date: string = '';
  end_date: string = '';
  timezone: number = 0;
  type: number = 0;
  asset_type: number = 0;
  visibility: number = 1;
  status: number = 0;
  content: string = '';
  files: Array<any> = [];
  photos?: Array<any>;
  address: string = '';
  latitude: number = 0;
  longitude: number = 0;
  property_type: number = 0;
  initial_price: string = '0';
  deposit_min: number = 0;
  initial_percentage = 0;
  quantity_salary_min = 0;
  media_name: string = '';
  media_url: string = '';
  need_remodelation: number = 0;
  state_id?: number;
  city_id?: number;
  created_at: string = '';
  updated_at: string = '';
  deleted: number = 0;
  google_maps_link = '';

  fields = new Array<AuctionField>();
  group?: AuctionGroup;
  state?: any;
}
