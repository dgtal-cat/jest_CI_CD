import { fullTrim, nameIsValid } from '../src/homework3'

describe('Здесь могла бы быть ваша реклама', () => {
  /**
   * Допишите несколько unit тестов для функции (вспоминаем тест-дизайн),
   * которая удаляет пробелы и табуляторы в начале и конце строки.
   */

  test('Проверяем тримминг для пробела в начале строки', () => {
    expect(fullTrim(' Это домашка')).toEqual('Это домашка')
  })

  test('Проверяем тримминг для пробела в конце строки', () => {
    expect(fullTrim('Это домашка ')).toEqual('Это домашка')
  })

  test('Проверяем тримминг для таба в начале строки', () => {
    expect(fullTrim('   Это домашка')).toEqual('Это домашка')
  })

  test('Проверяем тримминг для таба в конце строки', () => {
    expect(fullTrim('Это домашка  ')).toEqual('Это домашка')
  })

  /**
   * Напишите параметризированный unit (describe.each`table`) тест для функции,
   * которая проверяет валидность кличек котиков.
   * Кличка считается валидной, если она соответствует следующим условиям:
   * 1) Кличка содержит минимум два символа;
   * 2) Кличка не пустая;
   * 3) Кличка не содержит пробелов.

   Обратите внимание, в примере приведен обычный тест.
   Параметризированный тест - https://jestjs.io/docs/en/api#testeachtablename-fn-timeout
   */

  test('Передать валидную кличку', () => {
    expect(nameIsValid('Имя')).toEqual(true)
  })

  test.each`
    name       | expected
    ${'Зю'}    | ${true}
    ${''}      | ${false}
    ${'Котя'}  | ${true}
    ${'Ко тя'} | ${false}
    ${' я'}    | ${false}
  `('возвращает ожидаемое значения валидности клички', ({ name, expected }) => {
    expect(nameIsValid(name)).toBe(expected)
  })
})