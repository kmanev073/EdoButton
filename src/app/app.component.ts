import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  @Input() edoValue: string = null;
  @Output() edoClick: EventEmitter<MouseEvent> = new EventEmitter();

  onClick(event: MouseEvent) {
    this.edoClick.emit(event);
  }
}
