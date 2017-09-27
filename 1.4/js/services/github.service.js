(function (window) {

    var githubService = {};

    githubService.getUserData = function(githubUsername, success, error) {
        try {
            dataService.loadDataFromURL('GET', 'https://api.github.com/users/' + githubUsername, done);
        } catch (e) {
            console.log(e.message);
        }

        function done(response) {
            if(response.status == 200) {
                success(response.data);
            } else {
                error(response.data.message);
            }
        }
    };


    githubService.getUserReposList = function(githubUsername, success, error) {
        try {
            dataService.loadDataFromURL('GET', 'https://api.github.com/users/' + githubUsername + '/repos', done);
        } catch (e) {
            console.log(e.message);
        }

        function done(response) {
            if(response.status == 200) {
                success(response.data);
            } else {
                error(response.data.message);
            }
        }
    };



    window.githubService = githubService;
})(window);

