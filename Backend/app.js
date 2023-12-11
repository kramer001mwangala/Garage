const server = require(`./server`);

const PORT= process.env.PORT || 5000

const app = express();

server.listen(PORT, () => {
    console.log(`app is ready on port {PORT}`)
})