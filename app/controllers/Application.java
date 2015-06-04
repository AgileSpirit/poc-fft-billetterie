package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import domain.Cart;
import domain.Product;
import play.libs.Json;
import play.mvc.*;

import java.util.*;

import services.CartService;

import io.prismic.*;
import static controllers.Prismic.*;

public class Application extends Controller {

  @BodyParser.Of(BodyParser.Json.class)
  public static Result addProductToCart(Integer cartNumber) {
    JsonNode json = request().body().asJson();
    if(!json.has("name") || !json.has("quantity")) {
      return badRequest("Missing parameter name and/or quantity.");
    } else {
      Product specifiedProduct = new Product(json.findPath("name").textValue());
      Integer quantity = json.findPath("quantity").intValue();
      Cart specifiedCart = new Cart(cartNumber);
      ObjectNode resultData = Json.newObject();
      resultData.put("cartNumber",specifiedCart.getCartNumber());
      resultData.put("productName",specifiedProduct.getName());
      resultData.put("quantity",quantity);
      Status result;
      if (CartService.addProductToBasket(specifiedCart, specifiedProduct, quantity)){
        resultData.put("success", Boolean.TRUE);
        result = ok(resultData);
      } else {
        resultData.put("success", Boolean.FALSE);
        result = internalServerError(resultData);
      }
      return result;
    }
  }


  // -- Home page
  @Prismic.Action
  public static Result index() {
    List<Document> someDocuments = prismic().getApi().getForm("everything").ref(prismic().getRef()).submit().getResults();
    return ok(views.html.index.render(someDocuments));
  }

  // -- Home page
  @Prismic.Action
  public static Result store() {
    return ok(views.html.store.render());
  }

  // -- Document detail
  @Prismic.Action
  public static Result detail(String id, String slug) {
    Document maybeDocument = prismic().getDocument(id);
    String checked = prismic().checkSlug(maybeDocument, slug);
    if(checked == null) {
      return ok(views.html.detail.render(maybeDocument));
    }
    else if(DOCUMENT_NOT_FOUND.equals(checked)) {
      return pageNotFound();
    }
    else {
      return redirect(routes.Application.detail(id, checked));
    }
  }

  // -- Basic Search
  @Prismic.Action
  public static Result search(String q) {
    List<Document> results = new ArrayList<Document>();
    if(q != null && !q.trim().isEmpty()) {
      results = prismic().getApi().getForm("everything").query(Predicates.fulltext("document", q)).ref(prismic().getRef()).submit().getResults();
    }
    return ok(views.html.search.render(q, results));
  }

  // ---- Links

  // -- Resolve links to documents
  public static LinkResolver linkResolver(Api api, Http.Request request) {
    return new LinkResolver(api, request);
  }

  public static Result backbone() {
    return ok(views.html.backbone.render());
  }

  public static class LinkResolver extends SimpleLinkResolver {
    final Api api;
    final Http.Request request;

    public LinkResolver(Api api, Http.Request request) {
      this.api = api;
      this.request = request;
    }

    public String resolve(Fragment.DocumentLink link) {
      return routes.Application.detail(link.getId(), link.getSlug()).absoluteURL(request);
    }
  }

  // -- Page not found
  static Result pageNotFound() {
    return notFound("Page not found");
  }

}
