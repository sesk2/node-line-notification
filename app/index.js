const Line = require('./line-notify');
const myLine = new Line();
 
// get LINE token from a environment[$LINE_TOKEN].
myLine.setToken(process.env.LINE_TOKEN);
// Send messages via LINE Notify
myLine.notify('Hello World!');