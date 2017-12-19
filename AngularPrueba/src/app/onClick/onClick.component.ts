import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './onClick.component.html',
    styleUrls: ['./onClick.component.css']
})

export class onClick{

    value: number = 0;

    onclick(){
        this.value = this.value + 1;
    }

}