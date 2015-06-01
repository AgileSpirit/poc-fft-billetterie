package domain;

import java.util.List;

public class Cart {

    private Integer cartNumber;
    private List<Product> products;

    public Cart(Integer cartNumber){
        this.cartNumber = cartNumber;
    }

    public Integer getCartNumber() {
        return cartNumber;
    }
}
