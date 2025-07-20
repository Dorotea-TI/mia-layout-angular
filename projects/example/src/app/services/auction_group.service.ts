import { Inject, Injectable } from '@angular/core';
import {
  MiaBaseCrudHttpService,
  MiaCoreConfig,
  MIA_CORE_PROVIDER,
} from '@doroteati/mia-core';
import { HttpClient } from '@angular/common/http';
import { AuctionGroup } from '../entities/auction_group';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuctionGroupService extends MiaBaseCrudHttpService<AuctionGroup> {
  constructor(
    @Inject(MIA_CORE_PROVIDER) protected override config: MiaCoreConfig,
    protected override http: HttpClient
  ) {
    super(config, http);
    this.basePathUrl = environment.baseUrl + 'auction/group';
  }

  getActiveAuctionsGroup(): Observable<AuctionGroup[]> {
    return this.http
      .get<AuctionGroup[]>('https://prod.dorotea.co/auction/group/order')
      .pipe(
        map((auctionGroups) =>
          auctionGroups.filter(
            (auctionGroups) =>
              auctionGroups.status === AuctionGroup.STATUS_ACTIVE ||
              auctionGroups.status ===
                AuctionGroup.STATUS_FINALIZED_WITH_VISUALIZATION ||
              auctionGroups.status ===
                AuctionGroup.STATUS_PROGRAMMED_WITH_VISUALIZATION
          )
        )
      );
  }

  addNewAuctionGroupOrder(
    auctionGroupId: number,
    status: number
  ): Observable<any> {
    return this.postOb<any>(
      'https://prod.dorotea.co/auction/group/order/create',
      { auctionGroupId, status }
    );
  }

  updateAuctionOrder(auctionGroupIds: number[]): Observable<any> {
    return this.postOb<Number[]>(
      'https://prod.dorotea.co/auction/group/order',
      auctionGroupIds
    );
  }

  exportDb(groupId: number): Observable<Array<any>> {
    return this.postOb(this.basePathUrl + '/export-db', { id: groupId });
  }

  importExcel(assetType: number, url: string): Observable<any> {
    return this.postOb(this.basePathUrl + '/import', {
      asset_type: assetType,
      url: url,
    });
  }

  exportDbToCsv(groupId: number, filename: string): Observable<Array<any>> {
    return this.exportDb(groupId).pipe(
      tap((data) => this.saveToCsv(data, filename))
    );
  }

  exportGsos(groupId: number): Observable<Array<any>> {
    return this.postOb(this.basePathUrl + '/export-gsos', { id: groupId });
  }

  exportGsosToCsv(groupId: number, filename: string): Observable<Array<any>> {
    return this.exportGsos(groupId).pipe(
      tap((data) => this.saveToCsv(data, filename))
    );
  }

  exportAdjudicatarios(groupId: number): Observable<Array<any>> {
    return this.postOb(this.basePathUrl + '/export-adjudicatarios', {
      id: groupId,
    });
  }

  exportAdjudicatariosToCsv(
    groupId: number,
    filename: string
  ): Observable<Array<any>> {
    return this.exportAdjudicatarios(groupId).pipe(
      tap((data) => this.saveToCsv(data, filename))
    );
  }

  changeStatusToActive(groupId: number): Observable<Array<any>> {
    return this.postOb(this.basePathUrl + '/change-status-to-active', {
      id: groupId,
    });
  }

  saveToCsv(data: any, filename: string) {}
}
