var gulp = require("gulp");
var ts =  require("gulp-typescript");
var fs = require('fs');
var sourcemaps  =require("gulp-sourcemaps");
var buffer = require('vinyl-buffer');
// var watchify = require("watchify");
var browserify = require("browserify");
var run = require("gulp-run")
var uglify = require('gulp-uglify');
const exec = require('child_process').exec;
const { series } = require("gulp");

const parentPath = "ScriptTs";
function build(cb){
    //tsProject.src().pipe(tsProject()).pipe(gulp.dest("./js")) 生成d.ts,js
    //pipe(buffer()).pipe(sourcemaps.init({loadMaps:true})).pipe(sourcemaps.write('../js')).pipe(gulp.dest("./js")) 生成ts.mpa,js.map

    //文件夹内所有文件名
    let paths = fs.readdirSync(parentPath); // console.log('fs.readFileSync(path)',);
    
    for (let i = 0; i < paths.length; i++) {
        const element = paths[i];
        let fileName = parentPath + "/" + element;
        if(!fs.statSync(fileName).isDirectory()){
            //当前路径是文件
            continue;
        }

        let curPath = parentPath + "/" + element;
        if(fs.existsSync(curPath  + "/tsconfig.json")){
            //已有tsconfig.json 直接编译 tsc
            exec("tsc -b " + curPath  + "/tsconfig.json");
        }else{
            //默认tsconfig.json
            console.log('element',element);
            let tsProject = ts.createProject("./tsconfig.json");
            tsProject.options.outFile =  `./${element}.js`
            tsProject.config.include = [`./${parentPath}/${element}/**/*`]
            tsProject.src().pipe(tsProject()).pipe(gulp.dest("./js")).pipe(buffer()).pipe(sourcemaps.init({loadMaps:true})).pipe(sourcemaps.write('../js')).pipe(gulp.dest("./js"))
        }
    }

    //TODO: 监视更新的文件
    cb();
}

//混淆代码
function task(){
    // 1.匹配要处理的文件
    return gulp.src('./js/*.js')
    // 2.将js代码压缩混淆
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
}

exports.gulpBuild = build;
exports.build = series(build,task)