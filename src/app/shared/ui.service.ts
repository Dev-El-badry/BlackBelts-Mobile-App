import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UIService {
  loadingChangedStatus = new Subject<boolean>();

  constructor() {}

}