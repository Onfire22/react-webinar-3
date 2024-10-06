/**
 * Плюрализация
 * Возвращает вариант с учётом правил множественного числа под указанную локаль
 * @param value {Number} Число, под которое выбирается вариант формы.
 * @param variants {Object<String>} Варианты форм множественного числа.
 * @example plural(5, {one: 'товар', few: 'товара', many: 'товаров'})
 * @param [locale] {String} Локаль (код языка)
 * @returns {String}
 */
export function plural(value, variants = {}, locale = 'ru-RU') {
  // Получаем фурму кодовой строкой: 'zero', 'one', 'two', 'few', 'many', 'other'
  // В русском языке 3 формы: 'one', 'few', 'many', и 'other' для дробных
  // В английском 2 формы: 'one', 'other'
  const key = new Intl.PluralRules(locale).select(value);
  // Возвращаем вариант по ключу, если он есть
  return variants[key] || '';
}

/**
 * Генератор чисел с шагом 1
 * @returns {Function}
 */
export function codeGenerator(start = 0) {
  return () => ++start;
}

/**
 * Форматирование разрядов числа
 * @param value {Number}
 * @param options {Object}
 * @returns {String}
 */
export function numberFormat(value, locale = 'ru-RU', options = {}) {
  return new Intl.NumberFormat(locale, options).format(value);
}

export const buildTree = (data) => {
  console.log(data)
  const root = data.filter(item => !item.parent);
  data.forEach((item) => {
    if (item.parent) {
      const parentIndex = data.findIndex((elem) => elem._id === item.parent._id);
      if (!data[parentIndex].children) {
        data[parentIndex].children = [item];
      } else {
        data[parentIndex].children.push(item);
      }
    }
  })
  return root;
};

export const prepareOptions = (tree) => {
  const iter = (tree, depth = 0) => {
    return tree.flatMap((node) => {
      if (!node.children) {
        return { ...node, value: node._id, title: `${'- '.repeat(depth)} ${node.title}` };
      }
      return [{ ...node, value: node._id, title: `${'- '.repeat(depth)} ${node.title}` }, ...iter(node.children, depth + 1)];
    })
  }
  return iter(tree, 0);
};
