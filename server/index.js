import express from 'express';

import fileUpload from 'express-fileupload'
import path from 'path'
import cors from 'cors'
import {fileURLToPath} from 'url';
import router from './routes/index.js'
import errorHandler from './middleware/ErrorHandlingMiddleware.js'

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json())
app.use(cors())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))

app.use('/api', router)

// Обработка ошибок, последний Middleware
app.use(errorHandler)



app.listen(5000, () => {
  console.log('Express server initialized');
});