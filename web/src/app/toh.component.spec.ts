import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TohAppComponent } from '../app/toh.component';

beforeEachProviders(() => [TohAppComponent]);

describe('App: Toh', () => {
  it('should create the app',
      inject([TohAppComponent], (app: TohAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'toh works!\'',
      inject([TohAppComponent], (app: TohAppComponent) => {
    expect(app.title).toEqual('toh works!');
  }));
});
