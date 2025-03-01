import { classNames } from './class-names';

describe('classNames', () => {
  test('main classes', () => {
    expect(classNames('mainClass', { }, [])).toBe('mainClass');
    expect(classNames('mainClass, mainClassTwo', { }, []))
      .toBe('mainClass, mainClassTwo');
  });

  test('dynamic classes', () => {
    expect(classNames('', { classOne: true }, [])).toBe(' classOne');
    expect(classNames('', { classOne: false }, [])).toBe('');
    expect(classNames(
      '',
      { classOne: false, classTwo: true, classThree: undefined },
      [],
    ))
      .toBe(' classTwo');
  });

  test('additional classes', () => {
    const additionalClasses = ['classOne', 'classTwo'];
    expect(classNames('', { }, additionalClasses)).toBe(' classOne classTwo');
    expect(classNames('mainClass', { }, additionalClasses))
      .toBe('mainClass classOne classTwo');
  });

  test('all cases', () => {
    const additionalClasses = ['classOne', 'classTwo'];
    expect(classNames('', { }, additionalClasses)).toBe(' classOne classTwo');
    expect(classNames('mainClass', { }, additionalClasses))
      .toBe('mainClass classOne classTwo');
  });
});
