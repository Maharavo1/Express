        import { Router } from "express";
        import { pool } from "./databasepg.js";

        export const router = new Router();

        
        router.get("/index", (req, res) => {
            const countQuery = `
            SELECT * FROM person ;
            `;
            pool.query(countQuery, (err, data) => {
                if (err) {
                    console.error(err.message);
                    return res.status(500).send('Erreur de serveur');
                }
                res.send(data.rows);
            });
        });
        router.post("/update", (req, res) => {
            const { id, first_name, last_name } = req.body; // Récupérer les données d'insertion depuis le corps de la requête
        
            const insertQuery = `
            INSERT INTO person (id, first_name, last_name)
            VALUES ($1, $2, $3)
            `;
        
            pool.query(insertQuery, [id, first_name, last_name], (err) => {
            if (err) {
                console.error(err.message);
                return res.status(500).send('Erreur de serveur');
            }
        
            res.send('Insertion réussie');
            });
        });
        