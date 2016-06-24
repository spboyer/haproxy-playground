import { TohPage } from './app.po';

describe('toh App', function() {
  let page: TohPage;

  beforeEach(() => {
    page = new TohPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
