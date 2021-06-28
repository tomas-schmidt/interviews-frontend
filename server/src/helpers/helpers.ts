interface IItem {
  name: string;
  price: number;
  id: number;
  currency?: string;
}

function formatItems(items: IItem[]): IItem[] {
  var newItems: IItem[] = [];

  items.forEach(item => {
    let newItem = item;
    newItem.currency = '$';
    newItems.push(newItem);
  });

  return newItems;
}

export { formatItems };
