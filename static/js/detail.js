// Your code starts here

$(document).ready(function() {

    var fullUrl = window.location.href;
    var uri = fullUrl.split("http://127.0.0.1:5000/");
    var next = parseInt(uri[1]) + 1;
    console.log("work??");
    console.log(uri[1]);
    
    
    

    $.ajax({
        method: "GET",
        url: "api/pokemon/" + uri[1],
        dataType: "json",
        success(data){
            //reference a class in the html with $(".class") which is how jquery does it
            //append adds some stuff to the end of whatever div you've referenced
            //creating strings with `` allows you to use string interpolation in jquery
            //to actually add in the interpolated data, use ${data}
            //you reference json items the same way you'd reference a multi-dimensional array i.e. data[num]["name"]
            

            var img = data["image_url"];
            var name = data["name"];
            var description = data["description"];
            var types = data["types"];
            var evolutions = data["evolutions"];
            console.log(evolutions.length);
          










            $(".name").append( `<h1>${name}</h1>`);
            $(".img").append(`<img src="${img}" alt="${name}" width="100%" height="100%">`);
            $(".description").append(`<p>${description}</p>`);    
            
            for (let i = 0; i < types.length; i++) {         
                $(".types").append(`<li>${types[i]}</li>`);
            }   
            
            for (let i = 0; i < evolutions.length; i++) {
                $(".evolutionsPokemon")
                    .append(
                        `<a href="/${data["evolutions"][i]["id"]}">
                            <tr>
                                <td>${data["evolutions"][i]["to"]}</td>
                            </tr>
                        <a>`
                    );
            

                $(".evolutionsLevel")
                    .append(
                        `<tr><td>${data["evolutions"][i]["level"]}</td></tr>`
                    );
            
                
             
                $(".evolutionsMethod")
                    .append(
                        `<tr><td>${data["evolutions"][i]["method"]}</td></tr>`
                    );
            
                }

        }
    });
    
});