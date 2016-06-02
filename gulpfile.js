require('babel-core/register');

var gulp = require('gulp');
var webpack = require('webpack-stream');
var argv = require('yargs').argv;
var run = require('run-sequence');

var jsFiles = [
    './src/AppBundle/Resources/public/js/app/**/*.js'
];

gulp.task('build-js', bundleJSTask);
gulp.task('watch', watchTask);
gulp.task('build', buildTask);

gulp.task('copy-styles', copyStylesTask)
gulp.task('copy-fonts', copyFontsTask)

function bundleJSTask() {
    var dev = argv.d || argv.dev;

    var options = {
        watch: false,
        module: {
            loaders: [
                {test: /\.jsx?/, exclude: /node_modules/, loader: 'babel'}
            ]
        },
        plugins: [],
        output: { filename: 'index.js' },
        devtool: 'source-map'
    };

    if (!dev) {
        options.plugins.push(
            new webpack.webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
        }));
        options.plugins.push(
            new webpack.webpack.optimize.UglifyJsPlugin({
                sourceMap: false,
                mangle: true,
                comments: false,
                compress: {
                    warnings: false
                }
        }));
    }

    return gulp.src('./src/AppBundle/Resources/public/js/app/index.js')
        .pipe(webpack(options))
        .pipe(gulp.dest('./web/js'));
}

function watchTask() {
    gulp.watch(jsFiles, ['build-js']);
}

function buildTask(done) {
    var dev = argv.d || argv.dev;

    if (dev) {
        run(
            'copy-styles',
            'copy-fonts',
            'build-js',
            'watch',
            done
        );
    } else {
        run(
            'copy-styles',
            'copy-fonts',
            'build-js',
            done
        );
    }
}

var notificationsPath = './node_modules/react-notifications/lib/';

function copyStylesTask() {
    return gulp.src(notificationsPath + 'notifications.css')
        .pipe(gulp.dest('./web/css'))
}

function copyFontsTask() {
    return gulp.src(notificationsPath + 'fonts/*')
        .pipe(gulp.dest('./web/css/fonts'))
}