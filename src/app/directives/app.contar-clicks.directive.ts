import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: 'li[appContar-clicks]'
})

export class AppContarClicksDirective{
    clickN: number = 0;
    @HostBinding('style.opacity') opacity: number = 0.1;
    @HostListener('click',['$event.target']) onclick(btn) {
        console.log('a',btn,'Número de clicks:',this.clickN++)
        this.opacity += 0.1;
    }
}