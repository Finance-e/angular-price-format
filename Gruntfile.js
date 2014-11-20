"use strict";

module.exports = function( grunt ) {
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect:{
            server:{
                options:{
                    port:9002,
                    hostname: 'localhost',
                    open: true
                }
            }
        },
        uglify: {
            dist: {
              files: {
                'dist/angular-price-format.min.js': ['js/angular-price-format.js','js/jquery-price-format.js']
              }
            }
        },
        livereload  : {
            options   : {
              base    : 'css',
            },
            files     : ['css/**/*']
        },
        
        watch:{
            js:{
                files:['js/**/*'],
                tasks:['uglify:dist']
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-livereload');
    
    grunt.registerTask('createServer', ['connect:server']);
    grunt.registerTask('build', ['uglify:dist']);
    grunt.registerTask('run', ['createServer', 'watch']);
    
    
};