module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            scripts: {
                files: ['./*.js','./*.html','./*.css','./Controllers/*.js'],
                tasks: ['resta'],
                options: {
                    spawn: false,
                },
            },
        },
        jshint:{
            allFiles: ['./*.js','./Controllers/*.js'],
            options:{
                reporterOutput: "",
                ignores: ['gruntfile.js','AlumnesController.js']
            }
        },
        copy:{
            base: {
                expand: true, 
                src: ['./*.js','./*.css','./*.html'], 
                dest: '/Applications/MAMP/htdocs/', 
                filter: 'isFile'
            },
            ctrl: {
                expand: true,
                src: ['./Controllers/*.js'],
                dest: '/Applications/MAMP/htdocs/',
                filter: 'isFile'
            }
        }
    });

    grunt.event.on('watch', function(action, filepath) {
        grunt.config('default', filepath);
      });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch']);
    grunt.registerTask('resta', ['jshint','copy:base','copy:ctrl']);
};