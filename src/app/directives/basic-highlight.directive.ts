import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective {

  @HostBinding('style.backgroundColor') backgroundColor :string;
  @Input() defulatColor:string="white";
  @Input() highlightColor:string="gray";

  constructor(private element :ElementRef , private rerender :Renderer2) { 
    //this.element.nativeElement.style.backgroundColor="gray"
    //this.rerender.setStyle(this.element.nativeElement,"background-color","gray")
  }

  @HostListener('mouseenter') mouseover(eventData:Event){
    //this.rerender.setStyle(this.element.nativeElement,"background-color","gray")
    this.backgroundColor=this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
   // this.rerender.setStyle(this.element.nativeElement,"background-color","white")
   this.backgroundColor=this.defulatColor;
  }

}
