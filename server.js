import express from 'express'
import {ApolloServer} from 'apollo-server-express';
import {typeDefs} from "./Schema/typeDefs.js";
import {resolvers} from "./Schema/resolvers.js";

async function startServer() {
    const app = express()
    const server = new ApolloServer({typeDefs, resolvers});

    await server.start();

    server.applyMiddleware({app: app});

    app.use((req, res) => {
        res.send("Hello from express apollo server");
    });

    app.listen(process.env.PORT || 8000, () =>
        console.log(`🚀 Server ready at http://localhost:8000${server.graphqlPath}`)
    );
}

startServer();