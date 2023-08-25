import gulp from 'gulp';
import yargs from 'yargs';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass( dartSass );
import cleanCSS from 'gulp-clean-css';
import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import del from 'del';
import webpack from 'webpack-stream';
import uglify from 'gulp-uglify';
import named from 'vinyl-named';
import browserSync from 'browser-sync';
import zip from 'gulp-zip';
import replace from 'gulp-replace';
import info from './package.json';


const PRODUCTION = yargs.argv.prod;
const NOSOURCE = yargs.argv.nosours;

const server = browserSync.create();

const paths = {
    styles: {
        src: ['src/sass/app.scss'],
        dest: 'assets/css'
    },
    images: {
        src: 'assets/images/**/*.{jpg,jpeg,png,svg,gif}',
        // dest: 'assets/images'
    },
    scripts: {
        src: ['src/js/*.js'],
        dest: 'assets/js'
    },
    other: {
        src: ['assets/fonts/*'],
        dest: 'assets/fonts/'
    },
    package: {
        src: ['**/*', '!.vscode', '!node_modules{,/**}','!package{,/**}', '!documentaion{,/**}', '!assets{,/css/app.css.map}', '!src{,/**}', '!.babelrc', '!.gitignore', '!gulpfile.babel.js', '!package.json', '!package-lock.json'],
        dest: 'package'
    }

}

export const serve = (done) => {
    server.init({
        proxy: "https://school.test/"
    });
    done();
}

export const reload = (done) => {
    server.reload();
    done();
}

export const clean =  () => del(['assets/csss']);

export const styles = () => {
    return gulp.src(paths.styles.src)
        .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
        .pipe(sass({outputStyle: "expanded"}).on('error', sass.logError))
        .pipe(gulpif(PRODUCTION && !NOSOURCE, cleanCSS({compatibility: 'ie8'})))
        .pipe(gulpif(!PRODUCTION, sourcemaps.write('.')))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(server.stream());
}

export const watch = () => {
    gulp.watch('src/sass/**/*.scss', styles);
    gulp.watch('src/js/**/*.js', gulp.series(scripts, reload));
    gulp.watch('**/*.php', reload);
}

export const scripts = () => {
    return gulp.src(paths.scripts.src)
        .pipe(named())
        .pipe(webpack({
            mode: 'development',

            module: {
                rules: [
                    {
                        test: /\.js$/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env']
                            }
                        }
                    }
                ]
            },
            output: {
                filename: '[name].js'
            },
            externals: {
                jquery: 'jQuery'
            },
            devtool: !PRODUCTION ? 'inline-source-map' : false
        }))
        .pipe(gulpif(PRODUCTION, uglify()))
        .pipe(gulp.dest(paths.scripts.dest));
}

export const compress = () => {
    return gulp.src(paths.package.src)
        .pipe(replace('_themename', info.projectname))
        .pipe(zip(`${info.projectname}.zip`))
        .pipe(gulp.dest(paths.package.dest));
}

export const dev = gulp.series(clean, gulp.parallel(styles,scripts), serve, watch);
export const build = gulp.series(clean, gulp.parallel(styles,scripts));
export const bundle = gulp.series(build, compress);
export default dev;
