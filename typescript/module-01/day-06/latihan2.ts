interface Product {
    Name: string;
    Price: number;
}

class ProductClass implements Product{
    constructor(public Name: string, public Price: number){

    }
}

const ip15 = new ProductClass("Iphone 15", 12000000);
const ip16 = new ProductClass("Iphone 16", 15000000);
const ip17 = new ProductClass("Iphone 17", 18000000);

interface CartItem {
    product: ProductClass;
    qty: number
}

class Transaction {
    #product: CartItem[] = [];
    #total: number = 0;

    addToCart(product: ProductClass, quantity: number): void{
        this.#product.push({product: product, qty: quantity})
    }

    showTotal(): void{
        let totalCurrent: number = 0
        this.#product.map(item => {
            totalCurrent += item.product.Price * item.qty
        })
        this.#total = totalCurrent;
        console.log("Total sementara: Rp" + `${totalCurrent.toLocaleString('id-ID')}`);
    }

    checkOut(): {total: number, products: CartItem[]}{
        console.log("Produk yang dibeli:")
        this.#product.map(item => {
            console.log(`${item.product.Name} sebanyak ${item.qty}: Rp${(item.product.Price * item.qty).toLocaleString('id-ID')}`)
        })
        return {
            total: this.#total,
            products: this.#product
        }
    }
}

const newTransaksi = new Transaction()
newTransaksi.addToCart(ip15, 2);
newTransaksi.addToCart(ip16, 1);
newTransaksi.addToCart(ip17, 1);
newTransaksi.showTotal();
newTransaksi.checkOut()