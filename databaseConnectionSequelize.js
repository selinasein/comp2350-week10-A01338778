const is_qoddi = process.env.IS_QODDI || false;

const dbConfigQoddi =
  "mysql://freedb_2350_main_sel:Qk28*ry9NTw*w8z@sql.freedb.tech:3306/freedb_comp2350-A01338778";
const dbConfigLocal = "mysql://root:MySQLtpdls7^*@localhost/week10_lab";

if (is_qoddi) {
  var databaseConnectionString = dbConfigQoddi;
} else {
  var databaseConnectionString = dbConfigLocal;
}

module.exports = databaseConnectionString;
