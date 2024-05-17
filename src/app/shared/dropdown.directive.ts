import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class dropdownDirective{
    @HostBinding('class.open') isopen = false;
    @HostListener('click') toggleOpen(){
        this.isopen= !this.isopen;
    }
    
}