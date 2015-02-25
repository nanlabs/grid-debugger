module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.initConfig({
    connect: {
      uses_defaults: {}
    },
    uglify: {
      build: {
        files: {
          'dist/grid-debugger.min.js': 'src/grid-debugger.js'
        }
      }
    }
  });
  grunt.registerTask('default', ['connect']);
  grunt.registerTask('build', ['uglify']);
};