
import { faker } from "@faker-js/faker";
export default (count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
Text: faker.lorem.text(),
Input: faker.color.human(),
Icon: faker.finance.bic(),
Image: faker.image.animals(),
Avatar: faker.internet.avatar(),
Chip: faker.company.catchPhrase(),
Tag: faker.color.space(),

        };
        data = [...data, fake];
    }
    return data;
};
