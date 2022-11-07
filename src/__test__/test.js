import ArrayBufferConverter, { getBuffer } from '../index';

test('проверка выполнения кода', () => {
  const buffer = getBuffer();
  const test = new ArrayBufferConverter();
  test.load(buffer);
  const received = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(received).toEqual(test.toString());
});

test('проверка типа данных', () => {
  const buffer = getBuffer();
  const test = new ArrayBufferConverter();
  test.load(buffer);
  const received = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(typeof (received)).toEqual(typeof (test.toString()));
});
