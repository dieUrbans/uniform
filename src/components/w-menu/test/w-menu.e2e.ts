import { newE2EPage } from '@stencil/core/testing';

describe('w-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<w-menu></w-menu>');

    const element = await page.find('w-menu');
    expect(element).toHaveClass('hydrated');
  });
});
