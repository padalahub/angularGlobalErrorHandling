import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector:'[number-directive]'
})
export class NumberDirective {

    @Input()
    formattedPhone: any;
    @Input()
    formattedZipCode: any;
    @Input()
    formatType: string;

    constructor(private ref: ElementRef) {

    }
    @HostListener('keydown',['$event']) onKeyDown(event){
        const specialKeys =['Tab','Backspace','End', 'Home', 'Delete'];
        if(specialKeys.indexOf(event.key)!==-1){
            return;
        }
        if(event.keyCode === 37 || event.keyCode===38 || event.keyCode === 40) return true;
        if(this.formatType === 'zipCode'){
            if(event.key >=0 || event.key <=9 || event.key=== 67 || event.key === 86){

                if(this.formattedZipCode.value) {
                    if(this.formattedZipCode.value.length ===5) {
                        this.formattedZipCode.setValue(this.formattedZipCode.value +='-');
                    
                    }

                }
                return true;
            }
            return false;
        }
        if(this.formatType === 'phone'){
            if(event.key >=0 || event.key <=9 || event.key=== 67 || event.key === 86){

                if(this.formattedPhone.value) {
                    if(this.formattedPhone.value.length ===1) {
                        this.formattedPhone.setValue('('+this.formattedPhone.value);
                    
                    }
                    if(this.formattedPhone.value.length ===4) {
                        this.formattedPhone.setValue(this.formattedPhone.value +=')');
                    
                    }
                    if(this.formattedPhone.value.length ===9) {
                        this.formattedPhone.setValue(this.formattedPhone.value +='-');
                    
                    }

                }
                return true;
            }
            return false;
        }
    }
}