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
      currentPage: 1,
      skip: 0,
    };
  }

  async load(skip = 0, limit = 10) {
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

  setPagination(currentPage) {
    const skip = (currentPage - 1) * 10;
    this.setState({
      ...this.getState(),
      currentPage,
      skip,
    });
  }
}

export default Catalog;
