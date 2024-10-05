import StoreModule from "../module";
import { buildTree, prepareOptions } from "../../utils";

class Categories extends StoreModule {
  initState() {
    return {
      categories: [],
      error: null,
    }
  }

  async getCatalogFilters () {
    try {
      const response = await fetch('api/v1/categories?fields=_id,title,parent(_id)&limit=*');
      const data = await response.json();
      const tree = prepareOptions(buildTree(data.result.items));
      this.setState({
        ...this.getState(),
        categories: tree,
      });
    } catch (e) {
      this.setState({
        ...this.getState(),
        error: e.message,
      })
    }
  }
}

export default Categories;
