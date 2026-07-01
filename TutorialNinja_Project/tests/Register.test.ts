import { test } from '../fixtures/baseFixtures';
import { registerData, readCSV } from '../utils/csvReader';

const users: registerData[] = readCSV();
for (const user of users) {
    test(`Register`, async ({ hp, rp }) => {
        await hp.navigate();
        await hp.clickMyaccount();
        await hp.clickRegister();
        await rp.register(
            user.firstname,
            user.lastname,
            user.mobile,
            user.email,
            user.password,
            user.retype
        );
    });
}