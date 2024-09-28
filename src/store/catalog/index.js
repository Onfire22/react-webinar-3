import { API_ROUTES } from '../../routes';
import { codeGenerator } from '../../utils';
import StoreModule from '../module';

class Catalog extends StoreModule {
  constructor(store, name) {
    super(store, name);
    this.generateCode = codeGenerator(0);
  }

  initState() {
    return {
      list: [],
      paginationSkip: 10,
      paginationActiveId: 0,
      dataLength: 0,
    };
  }

  async setDataLength() {
    const response = await fetch(API_ROUTES.getAllItems());
    const json = await response.json();
    this.setState({
      ...this.getState(),
      dataLength: json.result.count,
    });
  }

  async loadNextItems(skip = 0) {
    const response = await fetch(API_ROUTES.getNextItems(skip));
    const json = await response.json();
    this.setState({
      ...this.getState(),
      list: json.result.items,
    }, 'Загружены товары из АПИ');
  }

  setActiveId(id) {
    this.setState({
      ...this.getState(),
      paginationActiveId: id,
    });
  }
}

export default Catalog;
