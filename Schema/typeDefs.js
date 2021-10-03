import {gql} from "apollo-server-express";

export const typeDefs = gql`
    type Results {
        name: String, 
        height: String, 
        mass: String,  
        gender: String, 
        homeworld: HomeWorld, 
    }
    
    type Character {
        next: String
        previous: String
        results: [Results]
    }
    
    type HomeWorld {
        name: String
    }
    
    type Query {
        getPeople: Character
        nav(url: String): Character
        search(input: String): Character
    }
`