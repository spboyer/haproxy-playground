import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {Hero} from './hero';

describe('Hero', () => {
  it('should create an instance', () => {
    expect(new Hero(0, 'test')).toBeTruthy();
  });
  it('should initialize properties', () => {
    let hero = new Hero(1, 'Fabien');
    expect(hero.id).toBe(1);
    expect(hero.name).toBe('Fabien');
  });
});
