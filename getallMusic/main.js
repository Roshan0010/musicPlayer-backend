import { Client, Databases } from 'node-appwrite';

export default async ({ req, res, log, error }) => {

  const client = new Client();
  client.setEndpoint(process.env.URL);
  client.setProject(process.env.PROJECT_ID);

  const db = new Databases(client);

  if (req.method === 'GET') {
    const response = await db.listDocuments(
      process.env.DATABASE_ID,
      process.env.COLLECTION_ID
    );
    console.log(response);
    return res.json(response);
  }
  
};
