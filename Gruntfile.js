module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-connect');
  grunt.initConfig({
    connect: {
      uses_defaults: {}
    }
  });
  grunt.registerTask('default', ['connect']);
};