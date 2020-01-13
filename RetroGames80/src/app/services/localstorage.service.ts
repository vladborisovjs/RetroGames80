import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  getCurrentUsing() {
    navigator.storage.estimate().then((estimate) => {
        console.log(`You\'re currently using about ${(estimate.usage / estimate.quota * 100).toFixed(2)}% of your available storage.`)
      }
    );
  }
}
