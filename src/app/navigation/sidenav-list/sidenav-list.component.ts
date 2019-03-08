import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidenav-list',
    templateUrl: './sidenav-list.component.html',
    styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
    sizes= [
        {size: "11.5", checked: false},
        {size: "11 ", checked: false},
        {size: "10.5", checked: false},
        {size: "10", checked: false},
        {size: "9.5 ", checked: false},
        {size: "9", checked: false},
        {size: "8.5 ", checked: false},
        {size: "8", checked: false},
        {size: "7.5 ", checked: false}
    ];

    brands = [
        {name: "adidas", checked: false},
        {name: "airJordan", checked: false}
    ];

    constructor() { }

    ngOnInit() {
    }

    onChange(data, $event) {
        data.checked = $event.checked;
        console.log(data);
        //console.log(this.brandAdidas, this.brandAirJordan, this.size11h);
    }

	onReset() {
        this.sizes.forEach((element) => {
            element.checked = false;
        })
        this.brands.forEach((element) => {
            element.checked = false;
        })
    }

}
