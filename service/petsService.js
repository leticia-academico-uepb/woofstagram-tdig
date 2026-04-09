// estrutura pra armazenar todos os pets
let petsDatabase = [];

let loggedPet = null;

export const addPet = (petData) => {
    const newPet = {
        id: Date.now(),
        ...petData,
        registeredAt: new Date().toISOString(),
    };
    petsDatabase.push(newPet);
    return newPet;
};

export const getAllPets = () => {
    return petsDatabase;
};

export const setLoggedPet = (pet) => {
    loggedPet = pet;
};

export const getLoggedPet = () => {
    return loggedPet;
};

export const logout = () => {
    loggedPet = null;
};

export const getPetById = (id) => {
    return petsDatabase.find((pet) => pet.id === id);
};
