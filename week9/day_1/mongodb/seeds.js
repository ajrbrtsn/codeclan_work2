use zoo;
db.dropDatabase();

db.animals.insertMany([
    {
        name: "Janet",
        type: "Polar Bear"
    },
    {
        name: 'Zoltan the Detructor',
        type: 'Penguin',
        age: 5 
    }
]);