const faker = require('faker');

const generateAppointments = (times) => {
    let appointments = [];
    for (let i = 0; i < times; i++) {
        appointments.push({
            name: faker.name.findName(),
            kind: faker.random.word(),
            time: `${~~(Math.random() * 24)}:${Math.random() > 0.5 ? '30' : '00'} ${Math.random() > 0.5 ? 'AM' : 'PM'}`,
            id: faker.random.uuid(),
        })
    }
    return appointments;
}

const generatePhysicians = (times) => {
    let physicians = [];
    for (let i = 0; i < times; i++) {
        let name = faker.name.findName();
        physicians.push({
            name,
            email: `${name}@${faker.random.word()}.com`,
            appointments: generateAppointments(~~(Math.random() * 5 + 1)),
            id: faker.random.uuid(),
        })
    }
    return physicians;
}

const list = generatePhysicians(~~(Math.random() * 5 + 1));

module.exports = list;