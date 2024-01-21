import { Client, Storage } from 'node-appwrite';

export default async ({ req, res }) => {
    try {
        const client = new Client();
        client.setEndpoint(process.env.APPWRITE_ENDPOINT);
        client.setProject(process.env.APPWRITE_PROJECT_ID);

        const storage = new Storage(client);

        if (req.method === 'POST') {
            // Assume the file is sent in the request body as a base64-encoded string
            const base64File = req.body.base64File; // Replace with the actual property name

            // Create a new file in Appwrite storage
            const fileResult = await storage.createFile(
                process.env.APPWRITE_BUCKET_ID, // Replace with your bucket ID
                Buffer.from(base64File, 'base64'),
                ['*'], // Replace with desired read permissions
                ['*']  // Replace with desired write permissions
            );

            return res.json({ fileId: fileResult });
        } else {
            return res.json({ error: "Invalid request method" });
        }
    } catch (error) {
        console.error('Error:', error.message);
        return res.json({ error: "An error occurred" });
    }
};
