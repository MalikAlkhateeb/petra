import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { messagingType } from '../types/Messaging.type';

@Injectable({
  providedIn: 'root'
})

export class MessagingService {
  private hash: { [subjectKey: string]: Subject<any> } = {};
  constructor() { }

  public push(subjectKey: messagingType, value: any = null): void {
    this.createSubject(subjectKey);
    this.hash[subjectKey].next(value);
  }
  public subject(key: messagingType): Observable<any> {
    this.createSubject(key);
    return this.hash[key];
  }

  private createSubject(key: string): void {
    if (!this.hash[key]) {
      this.hash[key] = new Subject<any>();
    }
  }
}
