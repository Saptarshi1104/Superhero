const { fabric } = require("./fabric");

var canvas = new fabric.Canvas('myCanvas');

block_height = 30;
block_width = 30;

player_x = 10;
player_y = 10;

player_object = "";
block_image = "";

function playerUpdate(){
fabric.Image.fromURL("https://lh3.googleusercontent.com/AJOrMN_6qa0oiSpXXpT9ykCrqzDG7rXHCKWIXi40gT6Isr7q2EAuWthqkcEGlCFrXJtMBXePX57OJcY-Thxo=w1920-h902-rw", function(Img)
{
player_object = Img;

player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set(
{
top:player_y,
left:player_x
});
canvas.add(player_object);
});
}

function newImage(){
fabric.Image.fromURL(getImage, function(Img)
{
block_image = Img;

block_image.scaleToWidth(block_width);
block_image.scaleToHeight(block_height);
block_image.set(
{
top:player_y,
left:player_x
});
canvas.add(block_image);
});
}