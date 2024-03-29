const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('cookie-parser');
const dotenv = require('dotenv');
const path = require('path');
const nunjucks = require('nunjucks');

dotenv.config();
const indexRouter = require('./routes');
const userRouter = require('./routes/user');

const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', html);

nunjucks.configure('views', {
    express : app,
    watch : true,{
});

app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
})

// app.use(morgan('dev'));

// app.use(morgan('dev'));
// app.use('/', express.static(path.join(__dirname, ' public')));
// app.use(express.json());
// app.use(express.urlencoded({extended:false}));
// app.use(cookieParser(process.env.COOKIE_SECRET));
// app.use(session({
//     resave : false,
//     saveUninitialized: false,
//     secret: process.env.COOKIE_SECRET,
//     cookie:{
//         httpOnly : true,
//         secure: false,
//     },
//     name : 'session-cookie',
// }));


// // app.use((req, res, next)=> {
// //     console.log('모든 요청에 다 실행됩니다.');
// //     next();
// // });

// // app.get('/', (req, res, next) => {
// //     console.log('Get/ 요청에서만 실행됩니다.');
// //     next();
// // }, (req, res)=> {
// //     throw new Error('에러는 에러 처리 미들웨어로 갑니다.');
// // });

// // app.use((err, req, res, next)=> {
// //     console.error(err);
// //     res.status(500).send(err.message);
// // });

// app.use('/', indexRouter);
// app.use('/user', userRouter);

// app.use((req, res, next)=> {
//     res.status(404).send('Not Found');
// })


// app.listen(app.get('port'), ()=> {
//     console.log(app.get('port'), 'waiting...');
// });