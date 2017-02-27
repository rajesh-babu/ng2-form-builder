import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
@Injectable()
export class ModalService {
  // Observable string sources
  private modalSource = new Subject<Boolean>();
  // Observable string streams
  modal$ = this.modalSource.asObservable();

  // Service message commands
  modalOpened(isOpened: Boolean) {
    this.modalSource.next(isOpened);
  }

}
