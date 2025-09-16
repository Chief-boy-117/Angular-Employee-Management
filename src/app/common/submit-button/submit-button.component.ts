import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  imports: [],
  templateUrl: './submit-button.component.html',
  styleUrl: './submit-button.component.css'
})
export class SubmitButtonComponent {
  @Input() buttonText: string = "";
  @Input() buttonClass: string = "";

  @Output() onBtnClick = new EventEmitter<any>();

  onClick() {
    this.onBtnClick.emit();
  }
}
