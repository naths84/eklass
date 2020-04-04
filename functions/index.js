const functions = require('firebase-functions');
const admin = require('firebase-admin');
const parser = require('xml2json');

const cors = require('cors')({origin: true});

admin.initializeApp(functions.config().firebase);

let db = admin.firestore();

exports.createXML = functions.https.onRequest(async (req, res) => {
    const xml = req.body;

    return cors(req, res, async () => {
      try {
        const jsonString = await parser.toJson(xml);
        const json = await JSON.parse(jsonString);

        await db.collection('questions').doc('bigString').set({jsonString: jsonString});

        res.json(json);
      } catch (error) {
        res.send(error);
      }
    })
  }
);



