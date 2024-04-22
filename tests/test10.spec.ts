import {test} from "@playwright/test";
import { DateTime } from 'luxon';

const link = 'https://pharmaevents.proximaresearch.com/uk/event-214/tr/event22?token='

test('play video 1', async ({page}) => {
    const currentDateHash: string = DateTime.local().toMillis().toString();
    await page.goto(`${link}${currentDateHash}`);

    await new Promise(resolve => setTimeout(resolve, 60000));
    console.log('wait 60 sec');
})
