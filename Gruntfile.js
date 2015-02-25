module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.initConfig({
    connect: {
      uses_defaults: {}
    },
    uglify: {
      build: {
        files: {
          'dist/grin-debugger.min.js': 'src/grid-debugger.js'
        }
      }
    },
    copy: {
      build: {
        files: [
          { src: 'src/*', dest: 'dist/' },
          { src: 'bower.json', dest: 'dist/' },
          { src: 'index.html', dest: 'dist/' }
        ]
      }
    }
  });
  grunt.registerTask('default', ['connect']);
  grunt.registerTask('build', ['copy', 'uglify']);
};