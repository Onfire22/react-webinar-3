import StoreModule from "../module";
import { API_ROUTES } from "../../routes";

class ItemPage extends StoreModule {
  initState() {
    return {
      activeItem: null,
    };
  }

  setActive(id) {
    fetch(API_ROUTES.getItemById(id))
      .then((data) => data.json())
      .then(({ result }) => this.setState({
        ...this.getState(),
        activeItem: result,
      }));
  }
}

export default ItemPage;
