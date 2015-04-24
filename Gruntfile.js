var mountFolder = function(connect, dir) {
    'use strict';

    return connect.static(require('path').resolve(dir));
};

/*global module:false*/
module.exports = function(grunt) {
    'use strict';

    require('time-grunt')(grunt);

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    var configuration = {
        source : 'app',
        release : 'dist'
    }

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        config: configuration,
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        concat: {
            options: {

            },
            dist: {
                src: [
                    '<%= config.source %>/common/**/*.js',
                    '<%= config.source %>/core/**/*.js'
                ],
                dest: '<%= config.release %>/myApp.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        watch: {
            livereload: {
                options: {
                    livereload: true
                },
                files: ['app/**/*.html',
                    'app/**/*.css',
                    'app/**/*.js',
                    'app/**/*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from
                // outside.
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            require('connect-livereload')(), // <--- here
                            mountFolder(connect, 'app')
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                url: 'http://localhost:9000'
            }
        },
        clean: {
            webdist: {
                src : '<%= config.release %>'
            }
        }

    });

    // Default task.
    grunt.registerTask('default', ['concat', 'uglify']);

    grunt.registerTask('server',['connect:livereload', 'watch']);

    grunt.registerTask('construct',['clean:webdist','concat:dist'])

};
