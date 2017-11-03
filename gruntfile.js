module.exports = function(grunt) {
    grunt.initConfig({
        jshint:{
            allFiles: ['*.js'],
            options: { reporterOutput: "" }
        } /*,
        concat:{
            dist: {
                src: ['script1.js','script2.js','script3.js'],
                dest: 'final.js'
            }
        },
        uglify:{
            dist: {
                src: ['final.js'],
                dest: 'final.min.js'
            }
        } */
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default',['jshint']);
};