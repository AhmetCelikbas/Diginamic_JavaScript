var app = {
    init: function () {
        console.log('Document title: ', document.title);
        document.title = '1.3';
        console.log('Document title: ', document.title);

        console.log("document.getElementsByTagName : ", document.getElementsByTagName("h1"));
        console.log("document.getElementsByClassName : ", document.getElementsByClassName("text-red"));
        console.log("document.getElementById", document.getElementById("title"));


        var title1 = document.getElementById('title-1');
        // Choix 1
        title1.addEventListener('click', function () {

            var p = document.createElement("p");
            p.id = "text-1"
            p.classList.add("text-red");
            p.innerText = "PIOU"
            document.body.appendChild(p);
        });



        var elementP = document.getElementsByTagName("p")[0];


        elementP.addEventListener('mouseover', function (e) {
            while (1){
                if(e.clientX < window.innerWidth/2){
                    elementP.classList.remove("text-red");
                    console.log("GAUCHE")
                } else if(e.clientX > window.innerWidth/2){
                    console.log("DROITE")
                    elementP.classList.add("text-red")
                }
            }



        }, false);


        elementP.addEventListener('mouseout', function (e) {
            elementP.classList.add("text-red")
        }, false);




    }
};
app.init();



function supprParagraphes() {
    var elementP = document.getElementsByTagName("p");
    for (var i=elementP.length-1; i>=0; i--){
        document.body.removeChild(elementP[i]);
    }
}