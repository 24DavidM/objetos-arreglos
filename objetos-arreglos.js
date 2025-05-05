// OBJECTOS

const user1 = {
    name: "Dani",
    lastName: "Lisituña",
    age: 29,
    address: {
        city: "Quito",
        telephone: "0987654321",
        streets: {
            principal: "Avenida Maldonado",
            secondary: "Teniente Hugo Ortiz"
        }
    }
};

const { name: nombre1, lastName: apellido1, age: edad1, address: { streets: calles1 } } = user1;
console.log(nombre1, apellido1, edad1, calles1);

const user2 = {
    name: "Ma",
    lastName: "Bel",
    age: 32,
    address: {
        city: "Quito",
        telephone: "0954321876",
        streets: {
            principal: "Av. Pedro Vicente Maldonado",
            secondary: "S47B Quito Sur"
        }
    }
};

const { name: nombre2, lastName: apellido2, age: edad2, address: { streets: calles2 } } = user2;
console.log(nombre2, apellido2, edad2, calles2);


const user3 = {
    name: "Jonathan",
    lastName: "AC",
    age: 27,
    address: {
        city: "Quito",
        telephone: "0912345678",
        streets: {
            principal: "Av. Mariscal Sucre",
            secondary: "Ajaví"
        }
    }
};

const { name: nombre3, lastName: apellido3, age: edad3, address: { streets: calles3 } } = user3;
console.log(nombre3, apellido3, edad3, calles3);


// ARREGLOS

const users = [
    {
        name: "Dani",
        lastName: "Lisituña",
        age: 29
    },
    {
        name: "Ma",
        lastName: "Bel",
        age: 32
    },
    {
        name: "Jonathan",
        lastName: "AC",
        age: 27
    }
];

const usersBDD = users.map((u) => {
    return {
        name: u.name.toUpperCase(),
        lastName: u.lastName.toUpperCase()
    };
});

console.log(usersBDD);
