module.exports = function(grunt) {
    grunt.initConfig({
        jshint:{
            allFiles: ['*.js'],
            ignores: ['gruntfile.js'],
            options:{
                reporterOutput: "",
                ignores: ['gruntfile.js']
            }
        },
        copy:{
            gen: {
                files: [
                    {
                        expand: true,
                        cwd: './',
                        src: ['*.js','*.css','*.html'],
                        dest: '/Applications/MAMP/htdocs'
                    }
                ]
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
/*    watch: {
        
         scripts: {
           files: ['*.js']
           tasks: ['jshint','gen']
           options: {
             spawn: false
           }
         } //scripts
         
       } //watch*/
       grunt.registerTask('default',['jshint','gen']);
       grunt.registerTask('gen', function (target) {
           grunt.task.run([
               'copy:gen'
           ]);
       });
};