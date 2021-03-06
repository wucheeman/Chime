var connection = require('./connection.js');

var orm = {
  selectAll: function(table, colArr, cb) {
    qv = `SELECT `;
    qv += arrIntoQuery(colArr);
    qv += ` FROM ${table};`;
    query(qv, cb);
  },
  findWhere: function(table, colArr, col, val, cb) {
    qv = `SELECT `;
    qv += arrIntoQuery(colArr);
    qv += ` FROM ${table}`;
    qv += ` WHERE ${col} = "${val}";`
    query(qv, cb);
  },
  findWhereOrderBy: function(table, colArr, col, val, order, cb) {
    qv = `SELECT `;
    qv += arrIntoQuery(colArr);
    qv += ` FROM ${table}`;
    qv += ` WHERE ${col} = "${val}"`;
    qv += ` ORDER BY ${order} DESC;`;
    query(qv, cb);
  },
  insertRow: function(table, colArr, valArr, cb) {
    qv = `INSERT INTO ${table} (`;
    qv += arrIntoQuery(colArr);
    qv += `) VALUES (`;
    qv += arrIntoQuery(valArr);
    qv += ');';
    query(qv, cb);
  },
  updateVal: function(table, id, col, val, cb) {
    var qv = `UPDATE ${table} WHERE id=${id}`;
    qv += ` SET ${col} = ${val};`;
    query(qv, cb);
  },
  deleteRow: function(table, col1, val1, col2, val2, cb) {
    var qv = `DELETE FROM ${table} WHERE ${col1} = ${val1} AND ${col2} = ${val2};`;
    query(qv, cb);
  },
  leftJoinSelect: function(colArr, table1, table2, condition, where, cb) {
    var qv = `SELECT `;
    qv += arrIntoQuery(colArr);
    qv += ` FROM ${table1}`;
    qv += ` LEFT JOIN ${table2} ON ${condition}`;
    qv += ` WHERE ${where};`;
    query(qv, cb);  
  },
  leftJoinSelectOrderBy: function(colArr, table1, table2, condition, where, order, cb) {
    var qv = `SELECT `;
    qv += arrIntoQuery(colArr);
    qv += ` FROM ${table1}`;
    qv += ` LEFT JOIN ${table2} ON ${condition}`;
    qv += ` WHERE ${where}`;
    qv += ` ORDER BY ${order} DESC;`
    query(qv, cb);  
  } 

}

function query(queryVal, cb) {
  connection.query(queryVal, (err, result) => {
    if (err) throw err;
    cb(result);
  });
}

function arrIntoQuery(arr) {
  var queryVal = '';
  for (var i = 0; i < arr.length; i++) {
    queryVal += `${arr[i]}`;
    if (i < arr.length - 1) {
      queryVal += `, `;
    }
  }
  return queryVal;
}


module.exports = orm;