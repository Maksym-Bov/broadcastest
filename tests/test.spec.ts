import {test} from "@playwright/test";
import {faker} from "@faker-js/faker";

const link = 'https://pharmaevents.proximaresearch.com/uk/event-214/tr/event22?token='

test('play video 1', async ({page}) => {
    const currentDateHash = faker.number.int(100);
    const userName = faker.internet.userName();
    await page.goto(`${link}${currentDateHash}`);
    await page.locator('#name').fill(userName);
    await page.locator('.btn').click();
    await new Promise(resolve => setTimeout(resolve, 10000));


    await new Promise(resolve => setTimeout(resolve, 60000));
    console.log('wait 60 sec');
})
