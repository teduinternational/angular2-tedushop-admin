import { Directive, ElementRef, Renderer, Input } from '@angular/core';
import { AuthenService } from '../services/authen.service';

@Directive({
  selector: '[checkPermission]'
})
export class CheckPermissionDirective {
  @Input() function: string;
  @Input() action: string;

  constructor(el: ElementRef, renderer: Renderer, private _authenService: AuthenService) {
    console.log('directive');
    var user = _authenService.getLoggedInUser();
    var result: boolean = false;
    switch (this.action) {
      case 'read':
        var hasPermission = user.permissions.find(x => x.FunctionId == this.function && x.CanRead == true);
        if (hasPermission == true)
          result = true;
        break;
      case 'create':
        var hasPermission = user.permissions.find(x => x.FunctionId == this.function && x.CanCreate == true);
        if (hasPermission == true)
          result = true;
        break;
      case 'update':
        var hasPermission = user.permissions.find(x => x.FunctionId == this.function && x.CanUpdate == true);
        if (hasPermission == true)
          result = true;
        break;
      case 'delete':
        var hasPermission = user.permissions.find(x => x.FunctionId == this.function && x.CanDelete == true);
        if (hasPermission == true)
          result = true;
        break;
    }
    if (result == false) {
      // Use renderer to render the element with styles
      renderer.setElementStyle(el.nativeElement, 'display', 'none');
    }
    else {
      renderer.setElementStyle(el.nativeElement, 'display', 'block');

    }
  }

}
