package services;

import domain.Cart;
import domain.Product;

/**
 * Created by julientellier on 01/06/2015.
 */
public class CartService {
    public static Boolean addProductToBasket(Cart cart, Product product, Integer quantity) {
        Boolean result;
        try {
            Thread.sleep(300);
            result = Boolean.TRUE;
        } catch (InterruptedException exception) {
            result = Boolean.FALSE;
        }
        return result;
    }
}
