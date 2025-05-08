type Phone = {
  customerId: string;
  areaCode: string;
  num: string;
};

type Dict<T> = {
  [key: string]: T;
};

type HasId = {
  customerId: string;
};

const phoneList: Phone[] = [
  { customerId: '0001', areaCode: '321', num: '123-4566' },
  { customerId: '0002', areaCode: '174', num: '142-3626' },
  { customerId: '0003', areaCode: '192', num: '012-7190' },
  { customerId: '0005', areaCode: '402', num: '652-5782' },
  { customerId: '0004', areaCode: '301', num: '184-8501' },
];

function list2Dict<T extends HasId>(list: T[]): Dict<T> {
  return Object.fromEntries(list.map((i) => [i.customerId, i]));
}

const phoneDict = list2Dict<Phone>(phoneList);
console.log(phoneDict);
