// Your code starts here

$(document).ready(function() {

    var fullUrl = window.location.href;
    var uri = fullUrl.split("http://127.0.0.1:5000/");
    console.log("work??");
    console.log(uri[1]);
    

    $.ajax({
        method: "GET",
        url: "api/pokemon/" + `${uri[1]}`,
        dataType: "json",
        success(data){
            //reference a class in the html with $(".class") which is how jquery does it
            //append adds some stuff to the end of whatever div you've referenced
            //creating strings with `` allows you to use string interpolation in jquery
            //to actually add in the interpolated data, use ${data}
            //you reference json items the same way you'd reference a multi-dimensional array i.e. data[num]["name"]



            var img = data[`${uri[1]}`]["image_url"];
            var name = data[`${uri[1]}`]["name"];
            var description = data[`${uri[1]}`]["description"];
            

            $(".container")
                .append(
                    `<div class = 'details'>
                        <p>${description}</p>
                        <img src="${img}" alt="${name}" width="80%" height="80%">
                    </div>`);
                    






 
        }
    });
    
});