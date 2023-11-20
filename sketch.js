
var coolbkg, sky
var trackstar
var mafia 
var buildings, buildingImg



function preload () {
    coolbkg= loadImage("coolbkg.jpeg")
    buildingImg= loadImage ("phtofc.jpeg");
    trackstar
}

function setup () {
    createCanvas (1200,600);

    

    sky = createSprite (600,300); 
    sky.addImage(coolbkg);
    sky.scale=1.3
    sky.velocityX = -1;

   
}

function draw () {
    background ("orange");

    //make sky go back to original x IF it cross certain x value.
    if (sky.x < 370) {
        sky.x = 800;
    }


    drawSprites (); 
    spawnBuildings ();
}

function spawnBuildings () {
    if (frameCount % 40 == 0){
        buildings = createSprite (1200,480);
        buildings.shapeColor = "black";
        buildings.velocityX = -5; 
        buildings.addImage (buildingImg);
        buildings.scale=random(1.5,4)
    }
}