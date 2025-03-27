import {Component, ElementRef, EventEmitter, HostListener, inject, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-form-slider-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-slider-modal.component.html',
  styleUrl: './form-slider-modal.component.scss'
})
export class FormSliderModalComponent {
  @Input() open = false;
  @Output()  close = new EventEmitter<void>()
  private el = inject(ElementRef)



  @HostListener("document:click", ["$event"])
  public onClickOutside(event: MouseEvent) {
    if (this.open && !this.el.nativeElement.contains(event.target)) {
      this.closeModal();
    }
  }

  @HostListener("document:keydown.escape", ["$event"])
  public onKeydownHandler(event:KeyboardEvent){
    this.open = !this.open
  }

  public closeModal(){
    this.open = !this.open
    this.close.emit()
  }

}
