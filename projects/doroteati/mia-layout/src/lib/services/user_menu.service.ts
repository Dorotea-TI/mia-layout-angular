import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MiaItemList } from '../components/mia-list/mia-list.component';

@Injectable({
    providedIn: 'root'
})
export class UserMenuService {

    onClick = new Subject<MiaItemList>();

    constructor(){ }

}
