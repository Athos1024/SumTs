var gulp = require("gulp");
var ts =  require("gulp-typescript");
var fs = require('fs');
var sourcemaps  =require("gulp-sourcemaps");
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
const child_process = require('child_process');
const { series } = require("gulp");

const parentPath = "ScriptTs";
const cachePath = "./.vscode/buildcache.json"


function build(cb){

    //文件夹内所有文件名
    let paths = fs.readdirSync(parentPath); // console.log('fs.readFileSync(path)',);
    let b = fs.readFileSync(cachePath);
    let cache = JSON.parse(b);

    for (let i = 0; i < paths.length; i++) {
        const element = paths[i];
        let fileName = parentPath + "/" + element;
        if(!fs.statSync(fileName).isDirectory()){
            //当前路径是文件
            continue;
        }

        let curPath = parentPath + "/" + element;

        let ctimeMs = fs.statSync(curPath).ctimeMs;
        if(!cache[element] ||　cache[element] > ctimeMs){
            //文件被更改
            console.log('cache[element]',cache[element]);
            console.log('ctimeMs',ctimeMs);

            
            cache[element] = ctimeMs;

            if(fs.existsSync(curPath  + "/tsconfig.json")){
                //已有tsconfig.json 直接编译 tsc
                child_process.exec("tsc -b " + curPath  + "/tsconfig.json");
            }else{
                //默认tsconfig.json
                console.log('element',element);
                let tsProject = ts.createProject("./tsconfig.json");
                tsProject.config.include = [`./${parentPath}/${element}/**/*`]
                tsProject.src().
                pipe(tsProject()).
                pipe(buffer()).
                pipe(sourcemaps.init({loadMaps:true})).
                pipe(sourcemaps.write('./')).
                pipe(gulp.dest("js"))
            }
        }
    }

    //更新缓存
    fs.writeFileSync(cachePath, JSON.stringify(cache));
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
exports.build = series([build,task])