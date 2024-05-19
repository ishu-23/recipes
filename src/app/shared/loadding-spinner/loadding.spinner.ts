import { Component } from "@angular/core";

@Component({
    selector : 'app-spinner',
    template : '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>',
    styleUrls : ['loadding.spinner.css']
})
export class loadingSpinner{}