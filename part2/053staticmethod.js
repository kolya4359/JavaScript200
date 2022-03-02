// 클래스 정적 메소드와 속성 정의

/*
static 키워드를 사용하여 build 정적 메소드를 정의한다.
build 정적 메소드는 난수를 아이디로 하는 상품 인스턴스를 반환한다.
*/
class Product {
  static build(name, price) {
    const id = Math.floor(Math.random() * 100);
    return new Product(id, name, price);
  }
  // 세금을 계산하여 반환하는 getTaxPrice 정적 메소드를 정의한다.
  static getTaxPrice(product) {
    return product.price * 0.1 + product.price;
  }
  // 상품 클래스의 생성자 함수를 정의한다.
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}
/*
폐기가 가능한 상품 클래스를 정의한다. DeposableProduct 클래스는 상품 클래스를 상속한다.
생성자 함수의 prototype 기반 상속과는 다르게 클래스로 상속을 하게 되면 정적 메소드 또한 상속하게 된다.
*/
class DeposableProduct extends Product {
  depose() {
    this.deposed = true;
  }
}

const gum = Product.build("껌", 1000);
console.log(gum);

const clothes = new DeposableProduct(1, "옷", 2000);
const taxPrice = DeposableProduct.getTaxPrice(clothes);
console.log(taxPrice);

// 클래스를 정의할 때 정적 속성 또한 static 키워드와 get 키워드를 통해 정의할 수 있다.

class ProductWithCode {
  static get CODE_PREFIX() {
    return "PRODUCT-";
  }

  constructor(id) {
    this.id;
    this.code = ProductWithCode.CODE_PREFIX + id;
  }
}

const product1 = new ProductWithCode("001");
console.log(ProductWithCode.CODE_PREFIX);
console.log(product1.code);
