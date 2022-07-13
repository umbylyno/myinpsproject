
const logo = 'https://www.inps.it/nuovoportaleinps/modelliNuovo/assets/img/img-not-available.jpg'
const workTime = ((7 * 60) + 42) * 60000
const today = new Date(Date.now());
const minimumEntrance = new Date(today.setHours(7, 30, 0));
const maximumEntrance = new Date(today.setHours(11, 30, 0));
const paperlessEntrance = new Date(today.setHours(8, 30, 0));

export {
    logo,
    workTime,
    today,
    maximumEntrance,
    minimumEntrance,
    paperlessEntrance
}