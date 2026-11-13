import { test, expect } from '../fixtures/test';

test('Verify checkbox selection', async ({ checkboxesPage }) => {
  await test.step('Verify two checkboxes are displayed', async () => {
    await expect(checkboxesPage.checkboxes).toHaveCount(2);
    await expect(checkboxesPage.firstCheckbox).toBeVisible();
    await expect(checkboxesPage.secondCheckbox).toBeVisible();
  });

  await test.step('Clear both checkboxes', async () => {
    await checkboxesPage.clearBothCheckboxes();

    await expect(checkboxesPage.firstCheckbox).not.toBeChecked();
    await expect(checkboxesPage.secondCheckbox).not.toBeChecked();
  });

  await test.step('Select the first checkbox', async () => {
    await checkboxesPage.selectFirstCheckbox();

    await expect(checkboxesPage.firstCheckbox).toBeChecked();
    await expect(checkboxesPage.secondCheckbox).not.toBeChecked();
  });

  await test.step('Select the second checkbox', async () => {
    await checkboxesPage.selectSecondCheckbox();

    await expect(checkboxesPage.firstCheckbox).toBeChecked();
    await expect(checkboxesPage.secondCheckbox).toBeChecked();
  });

  await test.step('Clear the first checkbox', async () => {
    await checkboxesPage.clearFirstCheckbox();

    await expect(checkboxesPage.firstCheckbox).not.toBeChecked();
    await expect(checkboxesPage.secondCheckbox).toBeChecked();
  });

  await test.step('Clear the second checkbox', async () => {
    await checkboxesPage.clearSecondCheckbox();

    await expect(checkboxesPage.firstCheckbox).not.toBeChecked();
    await expect(checkboxesPage.secondCheckbox).not.toBeChecked();
  });
});