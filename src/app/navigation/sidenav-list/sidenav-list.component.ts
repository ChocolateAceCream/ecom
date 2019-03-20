import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product-list/product.service';

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
        {size: "7.5 ", checked: false},
        {size: "7 ", checked: false}
    ];

    brands = [
        {name: "adidas", checked: false},
        {name: "Air Jordan", checked: false},
        {name: "Off White", checked: false}
    ];

    constructor(private productService: ProductService) { }

    ngOnInit() {
    }

    onChange(data, $event) {
        data.checked = $event.checked;
        //console.log(data);
        //console.log(this.brandAdidas, this.brandAirJordan, this.size11h);
    }

    onFilter() {
        let filterObj = {
            name: [],
            brand: [],
            size: [],
            topFilter: false
        }
        this.sizes.forEach(element => {
            if (element.checked) {
                filterObj.size.push(element.size);
            }
        })
        this.brands.forEach(element => {
            if (element.checked) {
                filterObj.brand.push(element.name);
            }
        })
        this.productService.doSideFilter(filterObj);
    }

	onReset() {
        this.sizes.forEach((element) => {
            element.checked = false;
        })
        this.brands.forEach((element) => {
            element.checked = false;
        })
        let filterObj = {
            name: [],
            brand: [],
            size: [],
            topFilter: false
        }
        this.productService.doSideFilter(filterObj);
    }

}
