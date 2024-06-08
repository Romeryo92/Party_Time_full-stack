const mongoose = require("mongoose")

async function main() {
    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect("mongodb+srv://romeryolenilson:SR0W9S7J4fOem0jc@cluster0.o5pi8fw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

        console.log("Conectado ao banco")
    } catch (error) {
        console.log(`Erro: ${error}`);        
    }
}

module.exports = main;