export interface Product {
    id: string;
    name: string;
    price: number;
    brand: string;
    size: number[];
    url: string;
    qty?: number;
    //topFilter?: boolean;
    //state?: 'complete' | 'cart' | 'wish';
}
