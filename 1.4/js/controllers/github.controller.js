function loadGithubUser() {
    var githubUsername = document.getElementById("githubUsername").value;
    var githubDiv = document.getElementById("githubData");

    githubDiv.innerHTML = "<br /><p><img src='images/loading.gif'></p>";

    githubService.getUserData(githubUsername, success, error);

    function success(data) {
        githubDiv.innerHTML = "";
        console.log(data);


        var retourLigne = document.createElement("br");
        githubDiv.appendChild(retourLigne);

        var avatarIMG = document.createElement("img");
        avatarIMG.setAttribute('src', data['avatar_url']);
        avatarIMG.setAttribute('alt', "Avatar de " + data['login']);
        githubDiv.appendChild(avatarIMG);

        var retourLigne = document.createElement("br");
        githubDiv.appendChild(retourLigne);

        var userNameLinkToGitHub = document.createElement("a");
        userNameLinkToGitHub.setAttribute('href', data['html_url']);
        userNameLinkToGitHub.setAttribute('target', "_blank");
        userNameLinkToGitHub.innerHTML = data['login'] ;
        githubDiv.appendChild(userNameLinkToGitHub);

        var retourLigne = document.createElement("br");
        githubDiv.appendChild(retourLigne);

        var userNameLinkToGitHub = document.createElement("a");
        userNameLinkToGitHub.setAttribute('href', "listeRepos.html?login=" + data['login']);
        userNameLinkToGitHub.innerHTML = data['public_repos'] + " repos public" ;
        githubDiv.appendChild(userNameLinkToGitHub);



        var userNameLinkToGitHub = document.createElement("p");
        userNameLinkToGitHub.textContent = data['bio'];
        githubDiv.appendChild(userNameLinkToGitHub);

    }
    
    function error(message) {
        githubDiv.innerHTML = "<br /><p>" + message + "</p>";
    }


}



function loadGithubUserReposList() {
    var githubDiv = document.getElementById("githubData");
    var githubUsername = new URL(window.location).searchParams.get('login');

    githubDiv.innerHTML = "<br /><p><img src='images/loading.gif'></p>";

    githubService.getUserReposList(githubUsername, success, error);

    function success(data) {
        githubDiv.innerHTML = "";
        console.log(data);

        var retourLigne = document.createElement("br");
        githubDiv.appendChild(retourLigne);


        var keys = Object.keys(data);
        var values = Object.values(data);
        for(var i=0; i<=keys.length; i++){


            console.log(values[i]);

            var p = document.createElement("p");

            p.innerHTML = "<p><b><a href='" + values[i]['html_url'] + "' target='_blank'>" + values[i]['full_name'] + "</a> : " + values[i]['description'] + " </b></p>";

            githubDiv.appendChild(p);

        }


        var retourLigne = document.createElement("br");
        githubDiv.appendChild(retourLigne);



    }

    function error(message) {
        githubDiv.innerHTML = "<br /><p>" + message + "</p>";
    }


}