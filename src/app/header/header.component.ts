import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() currentFeature = new EventEmitter<string>();

  onSelectFeature(feature: string) {
    this.currentFeature.emit(feature);
  }
}
