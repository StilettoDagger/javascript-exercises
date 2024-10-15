const findTheOldest = function (people) {

    // Get a new array of objects including people's ages
    const agedPeople = people.map(person => {
        if ("yearOfDeath" in person)
        {
            person["age"] = person.yearOfDeath - person.yearOfBirth;
        }
        else
        {
            person["age"] = (new Date().getFullYear()) - person.yearOfBirth;
        }        

        return person;
    })

    // Find the oldest person from the new array of people
    const oldestPerson = agedPeople.reduce((oldest, person) => {
        if (person.age > oldest.age)
        {
            oldest = person;
        }
        return oldest;
    });

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
