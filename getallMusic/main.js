import { Client, Databases } from 'node-appwrite';

export default async ({ req, res, log, error }) => {

  try {
    const client = new Client();
    client.setEndpoint(process.env.URL);
    client.setProject(process.env.PROJECT_ID);

    const db = new Databases(client);
    
    if (req.method === 'GET') {
      const response = await db.listDocuments(
        process.env.DB_ID,
        process.env.COLLECTION_ID
      );
      return res.json(response.documents);
    }
  } catch (err) {
    console.error('Error:', err.message);
    return res.status(500).json({ error: 'Server Error' });
  }

};
