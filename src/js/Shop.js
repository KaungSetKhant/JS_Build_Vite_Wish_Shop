import initialRender from "./core/initialRender.js";
import listener from "./core/listener.js";

class Shop {
  init() {
    console.log("Shop App Start");
    initialRender();
    listener();
  }
}

export default Shop;
