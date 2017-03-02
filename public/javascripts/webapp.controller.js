(function() {
    'use strict';

    angular
        .module('webApp')
        .controller('WebController', WebController);

    function WebController($scope, $animate) {
        var vm = this;
        vm.images = [];
        vm.queue = [];

        var sound = new Howl({
            src: ['assets/audio/horn.mp3']
        });

        vm.playhorn = function() {
            sound.play();
        };

        vm.videos = [{
            videoId: '1dLXp0_1b6I'
        }];

        vm.submit = function(url) {
            var id = url.split('=')[1];
            var newvideo = {
                videoId: id
            };
            var imageurl = "http://i.ytimg.com/vi/" + id + "/default.jpg";
            var imageinfo = {
                url: imageurl,
                videoId: id
            };

            vm.images.push(imageinfo);
            vm.queue.push(newvideo);
            console.log(vm.images);
        };

        vm.playvideo = function(id) {
            vm.videos[0] = {
                videoId: id
            };
        };
    };
})();