const {src, dest} = require('gulp');
//分割代入　srcとdestという変数がこのファイル内で使える状態になっている
const rename = require('gulp-rename');

function copyFiles() {
    return src(['./src/**/*.html'])
        .pipe(rename({
            prefix: 'hello-'
        }))
        //固定の文字列をつけたい場合はprefixというプロパティに付与したい文字列を記載する
        .pipe(dest('./dist'));
}
//二つのファイルを同時に実行する時は配列arrayとして実行できる
//大量にある場合はワイルドカード*を使う src('./src/*')
//拡張子だけ指定することもできる('./src/*.html')
//フォルダ構想?を再帰的にたどるという操作になる('./src/**')なのでsrcの中にフォルダが入っていた場合でもフォルダ内がコピーされる

exports.copyFiles = copyFiles;

//Exportsから追加されたものがcomandline上から実行できる関数となる
//gulpとは何らかのファイルに対して何らかの処理を行うもの
//操作対象となるファイル(src)と出力するファイル,作業が完了した時のファイル(dest)を使うので srcとdestになる
//pipeで処理をどんどんつなげていくので複雑になるとpipeで処理が重なっていく形になる

//流れとしては
//必要なplug in等をインターネットで探してくる、そのplug-inをpipeで渡してあげたobjectに対して処理を行ってあげる


//一般的な方法は・・
// const gulp = require('gulp');

// function copyFiles(){
//     return gulp.src();
// }

