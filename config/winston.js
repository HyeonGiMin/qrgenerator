const  winston =require('winston')
const winstonDaily = require('winston-daily-rotate-file')

const logDir='logs';
const {combine,timestamp,printf}=winston.format;

const logFormat=printf(info=>{
    return `${info.timestamp} ${info.level}: ${info.message}`;
})


//logLevel
//error :0, warn:1, info:2, http:3, verbose:4 debug:5, silly:6
const Logging=new winston.createLogger({
    format:combine(
        timestamp({
            format:'YYYY-MM-DD HH:mm:ss'
        }),
        logFormat
    ),
    transports:[
        //info 레벨 로그를 저장할 파일 생성
        new winstonDaily({
            level:'info',
            datePattern:'YYYY-MM-DD',
            dirname:logDir,
            filename:`%DATE%.log`,
            maxFiles:30,
            zippedArchive:true
        }),
         //error 레벨 로그를 저장할 파일 생성
         new winstonDaily({
            level:'error',
            datePattern:'YYYY-MM-DD',
            dirname:logDir+'/error',
            filename:`%DATE%.error.log`,
            maxFiles:30,
            zippedArchive:true
        }),
    ],
});

if(process.env.NODE_ENV !=='production'){
    Logging.add(new winston.transports.Console({
        format:winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
        )
    }))
}
module.exports =Logging