export interface Product {
    id: string;
    name: string;
    price: number;
    brand: string;
    size: number[];
    url: string;
    qty?: number;
    //state?: 'complete' | 'cart' | 'wish';
}
