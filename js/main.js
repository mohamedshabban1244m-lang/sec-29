

function getApi(){
    var xhttp=new XMLHttpRequest;


    xhttp.onreadystatechange=function(){

        if (this.readyState == 4 && this.status == 200){

            var result = JSON.parse(this.responseText);
            var cartoona='';

            for (let i = 0; i < result.length; i++){
                
                cartoona+=`
                 <div class="md:col-4 text-center">
                    <img src="${result[i].url}"class="w-100" alt="">
                    <h4 class="fg-black">${result[i].title}</h4>
                    <h6 class="fg-black">${result[i].id}</h6>
                </div>
                `

            }
            document.querySelector(".tst").innerHTML=cartoona;
            
        }
    };



    xhttp.open("GET",'https://jsonplaceholder.typicode.com/photos',true);
    xhttp.send();
}

getApi();


