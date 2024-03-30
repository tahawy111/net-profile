import { Page } from "puppeteer";

export default async function getUserData(page: Page) {
  await page.waitForSelector(".content");
  const userFetchMethods = {
    username: async () => {
      const query = await page.$(
        ".content > table table tbody table tbody tbody tr:nth-child(2) td:nth-child(2)"
      );
      return await query?.evaluate((el) => el.textContent);
    },
    subscriptionType: async () => {
      const query = await page.$(
        ".content > table table tbody table tbody tbody tr:nth-child(3) td:nth-child(2)"
      );
      return await query?.evaluate((el) => el.textContent);
    },
    subscriptionState: async () => {
      const query = await page.$(
        ".content > table table tbody table tbody tbody tr:nth-child(4) td:nth-child(2) strong"
      );
      return await query?.evaluate((el) => el.textContent);
    },
    yourDeviceIPAddress: async () => {
      const query = await page.$(
        ".content > table table tbody table tbody tbody tr:nth-child(6) td:nth-child(2)"
      );
      return await query?.evaluate((el) => el.textContent);
    },
    account: async () => {
      const query = await page.$(
        ".content > table table tbody table tbody tbody tr:nth-child(7) td:nth-child(2)"
      );
      return await query?.evaluate(
        (el) => `${parseInt(el.textContent!).toFixed(2)} L.E`
      );
    },
  };
  const userState = {
    yourPersonalAccountInfo: {
      username: await userFetchMethods.username(),
      subscriptionState: await userFetchMethods.subscriptionState(),
      subscriptionType: await userFetchMethods.subscriptionType(),
      yourDeviceIPAddress: await userFetchMethods.yourDeviceIPAddress(),
      account: await userFetchMethods.account(),
    },
    serviceData: {
        // Fetch Data
    },
    personalData: {
        // Fetch Data
    },
    yourQuota: {
        // Fetch Data
    },
  };
  console.log(userState);
}
