var gulp = require("gulp");
var ts =  require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var fs = require('fs')

// gulp.task("default", function () {
//     return gulp.src(paths.pages)
//     .pipe(gulp.dest("dist"));
// });

const parentPath = "ScriptTs";


function build(cb){
    //文件夹内所有文件名
    let paths = fs.readdirSync(parentPath); // console.log('fs.readFileSync(path)',);
    
    for (let i = 0; i < paths.length; i++) {
        const element = paths[i];
        let fileName = parentPath + "/" + element;
        if(!fs.statSync(fileName).isDirectory()){
            //当前路径是文件
            continue;
        }

        if(fs.statSync(parentPath + "/tsconfig.json").isFile()){
            //已有tsconfig.json
        }

        console.log('element',element);

    }
    cb();
}

exports.gulpBuild = build;
