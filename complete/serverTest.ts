
import * as admin from 'firebase-admin';
import * as express from 'express';

import * as compression from 'compression';

import { json } from 'body-parser';

import { join } from 'path';

const MESSAGES_COLLECTION = 'messages';

// tslint:disable-next-line:prefer-const
let serviceAccount = require('./firebase_key.json');

const initializeApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

if (initializeApp.instanceId) {
    console.log('Firebase has been initialized');
} else {
    console.log('Firebase failed to start');
}

// Express server
const app = express();

app.use(compression());
app.use(json());

const db = admin.firestore();

let port = process.env.PORT;
if (port == null || port === '') {
    port = '8000';
}
const DIST_FOLDER = join(process.cwd(), 'dist/pwa');

app.get('/api/messages', (req, res) => {
    db.collection(MESSAGES_COLLECTION).get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
            });
            res.status(200).json(snapshot.docs.map(d => {
                // Not sure why this doesn't detect that it's being updated
                // tslint:disable-next-line:prefer-const
                let messageGroup = d.data();
                messageGroup.message._id = d.id;

                return messageGroup;
            }));
        })
        .catch((reason) => {
            handleError(res, reason, 'Failed to get messages');
        });
});

app.post('/api/messages', (req, res) => {
    const newMessageGroup = {
        ...req.body,
        createDate: new Date()
    };

    if (!req.body.message && req.body.meessage.messagetext) {
        handleError(res, 'Invalid user input', 'Must provide a message text.', 400);
    } else {
        db.collection(MESSAGES_COLLECTION).add(newMessageGroup)
            .then((doc) => {
                newMessageGroup.message._id = doc.id;
                res.status(201).json(newMessageGroup);
            })
            .catch(err => {
                handleError(res, err.message, 'Failed to create new contact.');
            });
    }
});



app.use(express.static(DIST_FOLDER, {
    maxAge: '1y'
}));



// app.set('view engine', 'html');
// app.set('views', DIST_FOLDER);



app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
});

// // All regular routes use the Universal engine
// app.get('*', (req, res) => {
//   res.render('index', { req });
// });

function handleError(res: express.Response, reason: string, message: string, code: number = 500) {
    console.log(`ERROR: ${reason}`);
    res.status(code).json({ 'error': message });
}

