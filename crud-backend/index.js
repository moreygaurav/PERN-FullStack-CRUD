import express from "express";
import cors from "cors";
import clientRoutes from "./src/routes/clientRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



app.use('/api/clients', clientRoutes);




app.listen(PORT, () => {
    console.log (`server is running on port ${PORT}`);
})