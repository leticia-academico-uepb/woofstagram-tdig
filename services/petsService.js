// services/petsService.js

// Estrutura simples para armazenar todos os pets
let petsDatabase = [];

// Estrutura para armazenar o pet logado atualmente
let loggedPet = null;

// Adicionar novo pet
export const addPet = (petData) => {
    const newPet = {
        id: Date.now(),
        ...petData,
        registeredAt: new Date().toISOString(),
    };
    petsDatabase.push(newPet);
    return newPet;
};

// Pegar todos os pets
export const getAllPets = () => {
    return petsDatabase;
};

// Definir qual pet está logado
export const setLoggedPet = (pet) => {
    loggedPet = pet;
};

// Pegar o pet logado
export const getLoggedPet = () => {
    return loggedPet;
};

// Remover pet logado (logout)
export const logout = () => {
    loggedPet = null;
};

// Buscar pet por ID
export const getPetById = (id) => {
    return petsDatabase.find((pet) => pet.id === id);
};
