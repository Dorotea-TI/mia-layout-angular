import { Injectable } from '@angular/core';
import { Auction } from '../entities/auction';
import { MiaBaseCrudHttpService } from '@doroteati/mia-core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuctionService extends MiaBaseCrudHttpService<Auction> {
  constructor() {
    super();
    this.basePathUrl = environment.baseUrl + 'auction';
  }

  changeStatus(auctionId: number, status: number): Observable<Auction> {
    return this.postOb(this.basePathUrl + '/change-status', {
      id: auctionId,
      status: status,
    });
  }

  changeAuctionGroup(auctionId: number, groupId: number): Observable<Auction> {
    const body = {
      id: auctionId,
      group_id: groupId,
    };
    return this.postOb(this.basePathUrl + '/change-auction-group', body);
  }

  addSeller(auctionId: number, userId: number): Observable<Auction> {
    return this.postOb(this.basePathUrl + '/add-seller', {
      id: auctionId,
      user_id: userId,
    });
  }

  getGsoByUser(groupId: number, userId: number): Observable<any> {
    return this.postOb(this.basePathUrl + '/get-gso-by-user', {
      group_id: groupId,
      user_id: userId,
    });
  }

  calculateGso(auctionId: number) {
    return this.postOb(environment.baseUrl + 'auction/calculate-gso', {
      id: auctionId,
      auction_id: auctionId,
    });
  }
}
