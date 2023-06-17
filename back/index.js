require('dotenv').config();

const express = require('express')
const cors = require('cors')
const app = express()
// app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
const PORT = process.env.PORT || 3001;
const mysql = require('mysql')

const bodyParser = require('body-parser');


app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  });


// const connection = mysql.createConnection({
//     host: 'bwfywzyijnwwzfixdql5-mysql.services.clever-cloud.com',
//     user: 'u6dnyxsfnpwzcotv',
//     password: 'vOQ6ITLRCVhlZnfMhEIU',
//     database: 'bwfywzyijnwwzfixdql5'
// })

connection.connect((err, data) => {
    if (!err) {
        console.log('MySQL connected successfully!')
    } else {
        console.log("Error data: ", err)
    }
})

app.get('/categories', (req, res) => {
    connection.query('SELECT * FROM categories', (err, data) => {
        res.json(data)
    })
})

app.get('/coins/:id', (req, res) => {
    const userId = +req.params.id
    connection.query(`SELECT * FROM coins WHERE category_id=${userId}`, (err, data) => {
        if (!err) {
            res.json(data)
        } else {
            console.log('Coins Data Error: ', err)
        }
    })
})



app.get('/coin/:id', (req, res) => {
    const userId = +req.params.id
    const coinDetailsQuery = `SELECT *
                              FROM  coin_details 
                              JOIN coins 
                              ON coin_details.coin_id = coins.id
                              WHERE coin_details.coin_id = ${userId}`;
    const coinDescriptionsQuery = `SELECT * FROM coin_description WHERE coin_id = ${userId}`;
    connection.query(coinDetailsQuery, (err, coinDetailsData) => {
        if (err) {
            console.log('Coin Details Error: ', err);
            res.status(505).json();
            return;
        }
        connection.query(coinDescriptionsQuery, (err, coinDescriptionsData) => {
            if (err) {
                console.log('Coin Descriptions Error: ', err);
                res.status(505).json();
                return;
            }
            res.json(coinDetailsData.concat(coinDescriptionsData));
        });
    });
});


app.get('/listOfCoins', (req, res) => {
    const searchQuery = req.query
    const searchQueryArr = []

    if (searchQuery.search) {
        searchQueryArr.push(`title LIKE '%${searchQuery.search}%' OR about LIKE '%${searchQuery.search}%'`)
    }
    if (searchQuery.country) {
        searchQueryArr.push(`issuing_country LIKE '%${searchQuery.country}%'`)
    }
    if (searchQuery.metal) {
        searchQueryArr.push(`composition LIKE '%${searchQuery.metal}%'`)
    }
    if (searchQuery.quality) {
        searchQueryArr.push(`quality LIKE '%${searchQuery.quality}%'`)
    }
    if (searchQuery.fromPrice) {
        searchQueryArr.push(`price_base > ${searchQuery.fromPrice}`)
    }
    if (searchQuery.toPrice) {
        searchQueryArr.push(`price < ${searchQuery.toPrice}`)
    }
    if (searchQuery.fromYear) {
        searchQueryArr.push(`year > '${searchQuery.fromYear}'`)
    }
    if (searchQuery.toYear) {
        searchQueryArr.push(`year < '${searchQuery.toYear}'`)
    }

    const resultQuery = searchQueryArr.join(' AND ')
    // console.log("resultQueryArr: ", resultQuery)
    connection.query(`SELECT * FROM coins
    JOIN coin_details
    ON coins.id=coin_details.coin_id
    WHERE ${resultQuery};`, (err, data) => {
        if (!err) {
            res.json(data);
        } else {
            res.status(500).json()
            console.log("Filter Server Error: ", err)
        }
    })
})

app.post('/login', (req, res) => {
    const { email, password } = req.body
    connection.query(`SELECT * FROM users WHERE email = '${email}'`, (err, data) => {
        if (err || data.length === 0) {
            res.status(404).send()
        } else {
            if (data) {
                const adminUser = data[0]
                if (adminUser.password === password) {
                    res.json({
                        isAdmin: true
                    })
                } else {
                    res.status(401).json({
                        authError: 'Invalid password'
                    })
                }
            }
        }
    })
})

app.get('/countries', (req, res) => {
    connection.query(`SELECT DISTINCT issuing_country FROM coin_details;`, (err, data) => {
        if (!err) {
            res.json(data)
        } else {
            res.status(500).send()
        }
    })
})

app.get('/composition', (req, res) => {
    connection.query(`SELECT DISTINCT composition FROM coin_details;`, (err, data) => {
        if (!err) {
            res.json(data)
        } else {
            res.status(500).send()
        }
    })
})

app.get('/qualities', (req, res) => {
    connection.query(`SELECT DISTINCT quality FROM coin_details;`, (err, data) => {
        if (!err) {
            res.json(data)
        } else {
            res.status(500).send()
        }
    })
})

app.post('/admin/add', (req, res) => {
    const { title, about, image, back_image, category_id, issuing_country, currency_symbol, denomination, description, composition, price,
        quality, weight, weight_symbol, year } = req.body
        console.log('Coin add: ',req.body)
    const coinsTable = `INSERT INTO coins (category_id,title,about,image) VALUES('${category_id}','${title}','${about}','${image}');`
    connection.query(coinsTable, (err, coinsTableData) => {
        if (err) {
            console.log('Coins Table Post Error: ', err)
        } else {
            const { insertId } = coinsTableData
            const coin_details = `INSERT INTO coin_details (issuing_country,composition,quality,denomination,year,weight,back_image,price,currency_symbol,weight_symbol,coin_id)
                    VALUES ('${issuing_country}','${composition}','${quality}','${denomination}','${year}','${weight}','${back_image}','${price}','${currency_symbol}','${weight_symbol}','${insertId}');`
            connection.query(coin_details, (err, coinDetailsTableData) => {
                if (err) {
                    console.log('Coins_Details Table Post Error: ', err)
                } else {
                    const coinDescription = `INSERT INTO coin_description (coin_id,description) VALUES ('${insertId}','${description}')`
                    connection.query(coinDescription, (err, data) => {
                        if (!err) {
                            res.json({ success: true })
                        } else {
                            res.status(500).json()
                            console.log('Coin_Description Table Post Error: ', err)
                        }
                    })
                }
            })
        }
    })
})

app.delete('/coin/:id', (req, res) => {
    const id = +req.params.id
    console.log('Id:', id)
    const deleteCoin = `DELETE coins ,coin_details FROM coins LEFT JOIN coin_details ON coin_details.coin_id=coins.id WHERE coin_details.id='${id}';`
    connection.query(deleteCoin, (err, data) => {
        if (!err) {
            res.json({ deleted: true })
        } else {
            console.log('Delete Coin Error: ', err)
        }
    })
})


app.put('/admin/edit/:id', async (req, res) => {
    const id = +req.params.id;
    const { coinsTableData, coinDetailsTableData, descriptonTableData } = req.body;
    const mysqlData = [];

    try {
        if (coinsTableData) {
            const columns = Object.keys(coinsTableData);
            const string = columns.map((column) => `${column} = ?`).join(', ');
            const query = `UPDATE coins SET ${string} WHERE id = ?`;
            const values = [...Object.values(coinsTableData), id];
            await executeQuery(query, values);
            mysqlData.push({ update_success1: true });
            console.log('Success Update Coins Table');
        }

        if (coinDetailsTableData) {
            const columns = Object.keys(coinDetailsTableData);
            const string = columns.map((column) => `${column} = ?`).join(', ');
            const query = `UPDATE coin_details SET ${string} WHERE coin_id = ?`;
            const values = [...Object.values(coinDetailsTableData), id];
            await executeQuery(query, values);
            mysqlData.push({ update_success2: true });
            console.log('Success Update Coin_Details Table');
        }

        if (descriptonTableData) {
            const columns = Object.keys(descriptonTableData);
            const string = columns.join() + ' = ' + '?';
            const query = `UPDATE coin_description SET ${string} WHERE coin_id = ?`;
            const values = [...Object.values(descriptonTableData), id];
            await executeQuery(query, values);
            mysqlData.push({ update_success3: true });
            console.log('Success Update Coin_Description Table');
        }

        res.json(mysqlData);
    } catch (error) {
        console.log('Update Error: ', error);
        res.status(500).json({ error: 'An error occurred during update' });
    }
});

const executeQuery = (query, values) => {
    return new Promise((resolve, reject) => {
        connection.query(query, values, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};


app.listen(PORT, () => {
    console.log("Server Running: ", PORT)
})



