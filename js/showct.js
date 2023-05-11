function showContent(id){
    var cDivs = document.querySelectorAll('.tabs-content > .tab');
    cDivs.forEach(function(Div){
        Div.style.display = 'none';
    });
var selectedDiv = document.getElementById(id);
selectedDiv.style.display = 'block';
}
