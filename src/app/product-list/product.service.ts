import { Product } from './product.model';
import { Subject } from 'rxjs';

export class ProductService {
    private siz: number[] = [7.5,8,8.5,9,9.5,10,10.5,11];
    //we dont want this array to be modifiied, so we pass it as a private
    //property in the getAvaiableProduct method
    private availableProducts: Product[] = [
        {id: "874081571", name: "AJ1-Chicago(2015)",price:190,brand: "Air Jordan",size: [7].concat(this.siz) , url: "/assets/img/1548202389086.jpg"},
        {id: "555088602", name: "AJ1-Spiderman",price:210,brand: "Air Jordan",size: this.siz, url: "/assets/img/1548203160174.jpg"},
        {id: "555088610", name: "AJ1-BredToe",price:170,brand: "Air Jordan",size: this.siz, url: "/assets/img/1548203293141.jpg"},
        {id: "861428107", name: "AJ1-NotForResale",price:120,brand: "Air Jordan",size: this.siz, url: "/assets/img/1548203401989.jpg"},
        {id: "378037100", name: "AJ11-Concord",price:320,brand: "Air Jordan",size: this.siz, url: "/assets/img/1548203201012.jpg"},
        {id: "EE9614", name: "Yeezy-Mauve", price:160, brand: "adidas", size: this.siz, url: "/assets/img/1548202740537.jpg"},
        {id: "CP9366", name: "Yeezy-Boost-350-V2", price: 140, brand: "adidas", size: this.siz, url: "/assets/img/1548203017278.jpg"},
        {id: "AA7293001", name: "Air Max90", price: 400, brand: "OFF WHITE, Air Jordan", size: this.siz, url: "/assets/img/1548202997178.jpg"}
    ];

    private cartProducts: Product[] = [];

    countChange = new Subject<number>();
    orderChange = new Subject<number>();

    filterObj = new Subject<any>();

    //orderChange = new Subject<Product[]>();

    //filter from header search bar
    doFilter(filterValue: string) {
        let filter = {
            name: [filterValue.trim().toLowerCase()],
            brand: [filterValue.trim().toLowerCase()],
            size: [],
            topFilter: true
        }
        console.log(filter);
        this.filterObj.next(filter);
    }

    //fiter from sidenav selection
    doSideFilter(filter) {
        this.filterObj.next(filter);
    }

    getMostPopularProducts() {
        //the slice method will create a new copy of array,so original one wont
        //be editable
        let mostPopularProducts= this.availableProducts.slice();
        return mostPopularProducts.filter((product: Product) => product.price >100);
    }

    addCartProduct(product: Product) {
        this.cartProducts.push(product);
        let i = this.cartProducts.length
        this.orderChange.next(i);
        //this.orderChange.next(this.cartProducts.slice());
        this.countChange.next(i);
    }

    getOrderProducts() {
        let orderProducts = this.cartProducts.slice();
        let temp = orderProducts.slice();
        for(let i = 0; i<orderProducts.length;i++){
            let count=0;
            for(let j =0; j<orderProducts.length;j++){
                if(JSON.stringify(temp[j]) === JSON.stringify(temp[i])){
                    count++;
                }
            }
            orderProducts[i].qty=count;
        }

        let uniq={};
        let filtered = orderProducts.filter(obj => !uniq[obj.id+obj.size[0]]&&(uniq[obj.id+obj.size[0]]=true));

        //console.log(filtered);
        return filtered;
    }
}
