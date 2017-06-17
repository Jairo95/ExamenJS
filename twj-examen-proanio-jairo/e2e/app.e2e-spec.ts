import { TwjExamenProanioJairoPage } from './app.po';

describe('twj-examen-proanio-jairo App', () => {
  let page: TwjExamenProanioJairoPage;

  beforeEach(() => {
    page = new TwjExamenProanioJairoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
