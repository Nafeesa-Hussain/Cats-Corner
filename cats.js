
async function fetchCatDetails() {
    try {
        let response = await fetch('https://api.thecatapi.com/v1/breeds?attach_breed=0', {
            method: 'get',
            headers: { 'x-api-key': '110073ca-5521-476d-976a-098£774bf5ba' },
            mode: 'cors',
            cache: 'default'
        });
        let data = await response.json();
        return data;
    } catch (err) {
        return err;
    }
}

var names;

async function main() {
    var select = document.getElementById("arr");
    //var theImg = document.getElementById("image");
    let result = await fetchCatDetails();
    names = result.map(a => ({ name: a.name, img: a.image, child_friendly: a.child_friendly }));
    console.log(result);
    console.log(names);
    for (var i = 0; i < names.length; i++) {
        var optn = names[i].name;
        var el = document.createElement("option");
        el.textContent = optn;
        el.value = i;
        select.appendChild(el);
    }
}

function switchImage() {
    var theImg = document.getElementById("image");
    
    var selectedIndex = document.getElementById('arr');
    if(selectedIndex!=""){
    theImg.src = names[selectedIndex.value].img.url;
    }
    else{
        theImg.src = ""
    }
    console.log(selectedIndex.value)

}

main();

function lifespan(){

}
