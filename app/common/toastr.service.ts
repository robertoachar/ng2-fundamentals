import { Injectable } from '@angular/core';

declare let toastr:any;

@Injectable()
export class ToastrService {
  error(message: string, title?: string) {
    toastr.error(message, title);
  }

  info(message: string, title?: string) {
    toastr.info(message, title);
  }

  success(message: string, title?: string) {
    toastr.success(message, title);
  }

  warning(message: string, title?: string) {
    toastr.warning(message, title);
  }
}
