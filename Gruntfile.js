module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		clean: ['dist'],
		uglify: {
			options: {
				preserveComments: 'some'
			},
			build: {
				src: ['**/*.js'],
				cwd: 'src',
				dest: 'dist',
				ext: '.min.js',
				expand: true
			}
		},
		cssmin: {
			options: {
				keepBreaks: true
			},
			build: {
				src: ['**/*.css'],
				cwd: 'src',
				dest: 'dist',
				ext: '.min.css',
				expand: true
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['clean', 'uglify', 'cssmin']);

};