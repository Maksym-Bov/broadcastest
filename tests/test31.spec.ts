import {test} from "@playwright/test";
import {faker} from "@faker-js/faker";
import arr  from "../arr.json";
const link = 'https://pharmaevents.proximaresearch.com/uk/event-216/tr?token='

test('play video 1', async ({page}) => {
    const currentDateHash = arr[32].invited_link_token;
    const userName = faker.internet.userName();
    await page.goto(`${link}${currentDateHash}`);
    await page.locator('#name').fill(userName);
    await page.locator('.btn').click();
    await new Promise(resolve => setTimeout(resolve, 10000));
    await new Promise(resolve => setTimeout(resolve, 600000));
    console.log('wait 60 sec');
})