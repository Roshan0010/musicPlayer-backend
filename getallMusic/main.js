import { Client, Databases } from 'node-appwrite';

export default async ({ req, res, log, error }) => {

  try {
    const client = new Client();
    client.setEndpoint(process.env.URL);
    client.setProject(process.env.PROJECT_ID);

    const db = new Databases(client);
    try {
        if (req.method === 'GET') {
            const response = await db.listDocuments(
              process.env.DATABASE_ID,
              process.env.COLLECTION_ID
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

// "images": [
//   "https://cloud.appwrite.io/v1/storage/buckets/65abfae0131b1b34d3ec/files/65abfb5ee64e9cbbe283/view?project=65aba948a96699b1bdd6&mode=admin"
//   ],
//   "Song-url": "https://cloud.appwrite.io/v1/storage/buckets/65abfba2b3c80c44c884/files/65abff8822873cdbe807/view?project=65aba948a96699b1bdd6&mode=admin",