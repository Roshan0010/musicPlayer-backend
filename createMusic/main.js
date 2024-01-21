import { Client, Databases } from 'node-appwrite';

export default async ({ req, res, log, error }) => {

  try {
    const client = new Client();
    client.setEndpoint(process.env.URL);
    client.setProject(process.env.PROJECT_ID);

    const db = new Databases(client);
    try {
        if (req.method === 'POST') {
            const response = await db.listDocuments(
              process.env.DATABASE_ID,
              process.env.COLLECTION_ID,
            );
            return res.json(response);
          } 
    } catch (error) {
        return res.json({ error: "1" });
    }
    
  } catch (err) {
    console.error('Error:', err.message);
    return res.json({ error: "2" });
  }

};