var connection = require('./connection.js');

var orm = {
  selectAll: function(table, cb) {
    qv = `SELECT * FROM ${table};`;
    query(qv, cb);
  },
  findWhere: function(table, colArr, col, val, cb) {
    qv = `SELECT `;
    qv += arrIntoQuery(colArr);
    qv += ` FROM ${table}`;
    qv += ` WHERE ${col} = ${val};`
    query(qv, cb);
  },
  findAll: function(table, col, val, cb) {
    qv = `SELECT * FROM ${table}`;
    qv += ` WHERE ${val} = ${col};`;
    query(qv, cb);
  },
  insertRow: function(table, colArr, valArr, cb) {
    qv = `INSERT INTO ${table} (`;
    qv += arrIntoQuery(colArr);
    qv += `) VALUES (`;
    qv += arrIntoQuery(valArr);
    qv += ';';
    query(qv, cb);
  },
  updateVal: function(table, id, col, val, cb) {
    var qv = `UPDATE ${table} WHERE id=${id}`;
    qv += ` SET ${col} = ${val};`;
    query(qv, cb);
  },
  deleteRow: function(table, col, val, cb) {
    var qv = `DELETE FROM ${table} WHERE ${col}=${val};`;
    query(qv, cb);
  },
  leftJoinSelect: function(colArr, table1, table2, condition, cb) {
    var qv = `SELECT `;
    qv += arrIntoQuery(colArr);
    qv += ` FROM ${table1}`;
    qv += ` LEFT JOIN ${table2} ON ${condition};`;
    query(qv, cb);  
  },
  leftJoinChained: function(colArr, table1, table2, condition1, condition2, cb) {
    var qv = `SELECT `;
    qv += arrIntoQuery(colArr);
    qv += `FROM ${table1}`;
    qv += `LEFT JOIN ${table2} ON ${condition1}`;
    qv += ` AND ${condition2};`;
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
  var queryVal = ''
  for (var i = 0; i < queryVal.length-1; i++) {
    queryVal += `${arr[i]}`;
    if (i < queryVal.length - 1) {
      queryVal += `,`;
    }
  }
  return queryVal;
}


module.exports = orm;