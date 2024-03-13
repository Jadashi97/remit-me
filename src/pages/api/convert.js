// pages/api/convert.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      // Here you will handle your conversion logic or any backend logic.
      // You would connect to Firebase Firestore to store or retrieve data.
      // For example, let's just send a JSON response back:
      res.status(200).json({ message: 'Conversion successful!' });
    } else {
      // Handle any other HTTP methods
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  