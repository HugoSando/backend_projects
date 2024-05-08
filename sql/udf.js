const sqlite3 = require('sqlite3').verbose() // npm install sqlite3
const Dataframe = require('dataframe-js').DataFrame // npm install dataframe-js

const db = new sqlite3.Database('Northwind.db', (err) => {
  if (err) {
    console.error(err.message)
  }
  console.log('Connected to the Northwind database.')
})

const sql = `SELECT * FROM Products where price > 20 ORDER BY price DESC`

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err
  }

  // creating a dataframe from the rows
  const df = new Dataframe(rows)
  // printing the dataframe
  console.log(df.select('ProductName', 'Price').show(10))
})

db.close((err) => {
  if (err) {
    console.error(err.message)
  }
  console.log('Close the database connection.')
})
// Output:
// Connected to the Northwind database.
