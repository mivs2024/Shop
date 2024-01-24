import sqlite3 from 'sqlite3'



const db = new sqlite3.Database('../sql.db', (err) => { 
 if (err) {
 console.log('Could not connect to database', err) 
 } else { 
 console.log('Connected to database') 
 } })

