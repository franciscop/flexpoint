module.exports = function (grunt) {
  grunt.initConfig({

    sass: {
      dist: {
        options: { sourcemap: 'none',
          style: 'compressed'
        },
        files: {
          'flexpoint.min.css': 'flexpoint.scss'
        }
      }
    },

    watch: {
      scripts: {
        files: ['*.scss', 'Gruntfile.js'],
        tasks: ['default'],
        options: { spawn: false },
      }
    },
    bytesize: {
      all: {
        src: [
          'flexpoint.min.css'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-bytesize');
  grunt.registerTask('default', ['sass', 'bytesize']);
};
