var texts=["Me","Brother","Mom","Dad"]
var images=["Me.jpg","Evan.jpg","Mom.jpg","Dad.jpg"]


var i=0;

function update()
{
i++;
var numbers_of_family__memeber_in_array = 3
if(i > numbers_of_family__memeber_in_array )
{
    i = 0
}
var updateImage = images[i];
var updateName = texts[i];
document.getElementById("img1").src = updateImage;
document.getElementById("name1").innerHTML = updateName;
}