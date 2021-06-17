function fun()
{
    var movie = document.querySelector("input").value;
    // console.log(movie);
    movie = movie.toLowerCase();
    var list = document.querySelectorAll("h4");
    for (i = 0; i < list.length; i++) {
         console.log(list[i].innerHTML);
        check = list[i].innerHTML.toLowerCase();
        if(check.includes(movie) && movie!=='')
        {
            console.log(list[i].innerHTML);
            document.getElementById('bigcon').style.display = "none";
            document.getElementById("con-hid").style.visibility = "visible";
            document.getElementById("result").innerHTML = document.getElementById(check).innerHTML;
            break;
        }
        else{
            console.log("Not found");
            document.getElementById('bigcon').style.display = "none";
            document.getElementById("con-hid").style.visibility = "visible";
            document.getElementById("result").innerHTML = "<h1>No results found</h1>";
        }
      }
}

function reload()
{
    location.reload();
}


