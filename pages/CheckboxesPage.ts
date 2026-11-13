import type {Locator, Page } from '@playwright/test';
export class CheckboxesPage {
    readonly page:Page;
    readonly checkboxes: Locator;
    readonly firstCheckbox: Locator;
    readonly secondCheckbox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkboxes = page.getByRole('checkbox');
        this.firstCheckbox = this.checkboxes.nth(0);
        this.secondCheckbox = this.checkboxes.nth(1);
    }
    async goto(): Promise<void> {
        await this.page.goto('/checkboxes');

    }
    async clearBothCheckboxes(): Promise<void> {
    await this.firstCheckbox.uncheck();
    await this.secondCheckbox.uncheck();
  }

  async selectFirstCheckbox(): Promise<void> {
    await this.firstCheckbox.check();
  }

  async selectSecondCheckbox(): Promise<void> {
    await this.secondCheckbox.check();
  }

  async clearFirstCheckbox(): Promise<void> {
    await this.firstCheckbox.uncheck();
  }

  async clearSecondCheckbox(): Promise<void> {
    await this.secondCheckbox.uncheck();
  }
}
