import Junior from './classes/Junior';
import Mid from './classes/Mid';
import Programmer from './classes/Programmer';
import Senior from './classes/Senior';

const features = {
    skills: 10,
    experience: 10,
    willingness: 10,
}

const task = {
    difficult: 1,
    size: 1,
}

const programmer = new Programmer(features);
const time = programmer.getApproximateTimeTaskDoneInHours(task);
console.log(time);

const juniorFeatures = new Junior(features);
const juniorClean = new Junior();
const timeJuniorF = juniorFeatures.getApproximateTimeTaskDoneInHours(task);
const timeJuniorC = juniorClean.getApproximateTimeTaskDoneInHours(task);
console.log(`Time for set features junior: ${timeJuniorF}`);
console.log(`Time for unset features junior: ${timeJuniorC}`);

const midFeatures = new Mid(features);
const midClean = new Mid();
const timeMidF = midFeatures.getApproximateTimeTaskDoneInHours(task);
const timeMidC = midClean.getApproximateTimeTaskDoneInHours(task);
console.log(`Time for set features mid: ${timeMidF}`);
console.log(`Time for unset features mid: ${timeMidC}`);

const seniorFeatures = new Senior(features);
const seniorClean = new Senior();
const timeSeniorF = seniorFeatures.getApproximateTimeTaskDoneInHours(task);
const timeSeniorC = seniorClean.getApproximateTimeTaskDoneInHours(task);
console.log(`Time for set features senior: ${timeSeniorF}`);
console.log(`Time for unset features senior: ${timeSeniorC}`);