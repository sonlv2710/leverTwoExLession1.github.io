const person = {
    first: 'Elon',
    last: 'Musk',
    twitter: '@elonmusk',
    company: 'Space X'
}

const newPerson = ({ first, last } = person) => {

    let Elon = {
        fullName: `${first} ${last}`,
    }

    return `${Elon.fullName}`;
}


console.log(newPerson()) 