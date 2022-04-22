import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirectiveDirective {
  @Input() elementType?: string;
  @Input() firstOrLast?: boolean;

  originalElementBorder!: string;
  
  constructor(private el: ElementRef) {
    this.originalElementBorder = this.el.nativeElement.style.border;

   }

   @HostListener("mouseenter") onMouseEnter() {
    if (this.elementType == "type") { 
      this.el.nativeElement.style.textDecoration = "underline";
    }
    else if (this.elementType == "tag") { 
      this.el.nativeElement.style.fontWeight = "bold";
    }
    else if (this.elementType == "card" && this.firstOrLast) { 
      this.el.nativeElement.style.border = "3px dashed brown";
    }
  }
  @HostListener("mouseleave") onMouseLeave() {
    if (this.elementType == "type") { 
      this.el.nativeElement.style.textDecoration = "initial";
    }
    else if (this.elementType == "tag") { 
      this.el.nativeElement.style.fontWeight = "normal";
    }
    else if (this.elementType == "card" && this.firstOrLast) { 
      this.el.nativeElement.style.border = this.originalElementBorder;
    }
  }

}
