import fetch from 'node-fetch';

export const resolvers = {
    Results: {
        homeworld: (parent) => {
            return fetch(parent.homeworld)
                .then(response => response.json());
        }
    },
    Query: {
        getPeople: () => {
            return fetch('https://swapi.dev/api/people/')
                .then(response => response.json())
        },
        nav: (parent, args, context, info) => {
            return fetch(`${args.url}`)
                .then(response => response.json())
        },
        search: (_, args) => {
            return fetch(`https://swapi.dev/api/people/?search=${args.input}`)
                .then(response => response.json());
        }
    }
}