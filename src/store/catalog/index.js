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
      item: null,
      limit: null,
      currentPage: 0,
    };
  }

  async load(limit = 10, skip = 0) {
    const response = await fetch(
      `/api/v1/articles?limit=${limit}&skip=${skip}&fields=items(_id, title, price),count`,
    );
    const json = await response.json();
    this.setState(
      {
        ...this.getState(),
        list: json.result.items,
        limit: json.result.count,
      },
      'Загружены товары из АПИ',
    );
  }

  async loadItemInfo(id) {
    try {
      const response = await fetch(`/api/v1/articles/${id}`);
      if (response.ok) {
        const { result } = await response.json();
        this.setState({
          ...this.getState(),
          item: result,
        });
      } else {
        throw new Error('Ошибка в запросе');
      }
    } catch (e) {
      console.warn(e);
    }
  }
}

export default Catalog;
