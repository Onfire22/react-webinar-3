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
    };
  }

  async load() {
    const response = await fetch('/api/v1/articles');
    const json = await response.json();
    this.setState(
      {
        ...this.getState(),
        list: json.result.items,
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
