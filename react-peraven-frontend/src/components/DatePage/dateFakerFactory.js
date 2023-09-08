
import { faker } from "@faker-js/faker";
export default (count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
Datetext: faker.datatype.datetime(),
DateCalendar: faker.date.birthdate(),

        };
        data = [...data, fake];
    }
    return data;
};
