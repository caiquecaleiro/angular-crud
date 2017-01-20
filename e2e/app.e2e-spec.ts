import { AngularCrudPage } from './app.po';

describe('angular-crud App', function() {
  let page: AngularCrudPage;

  beforeEach(() => {
    page = new AngularCrudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
