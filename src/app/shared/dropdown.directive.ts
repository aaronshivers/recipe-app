import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') showDropdown = false;

  @HostListener('click') toggleShowDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  constructor() { }

}
