import {Directive, ElementRef, HostListener,Input} from "@angular/core";


@Directive({
  selector: '[changeColor]',
  standalone:true,
})

export class ChangeColorDirective{
  @Input() hightlight = ''

  constructor(private el:ElementRef) {
    this.el.nativeElement.style.backgroundColor="yellow"
  }

  @HostListener("mouseenter") onMouseEnter(){
    this.onChangeHightlight(this.hightlight||"red")
  }
  @HostListener("mouseleave") onMouseLeave(){
    this.onChangeHightlight("")
  }


  private onChangeHightlight(value:string){
    this.el.nativeElement.style.backgroundColor=value
  }
}
