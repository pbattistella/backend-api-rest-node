const app = require('./src/app')
const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
    console.log(`Server is started in http://localhost:${PORT}/api`);
})