function preload()
{

}

function setup()
{
    canvas = createCanvas(1200,1200);
    canvas.position(530,350)
    video = createCapture(VIDEO);
    video.hide();

}

function draw()
{
    image(video, 0, 0, 800, 800);
    fill("lavender");
    stroke("purple");
    
    circle(20, 20,40);
    circle(180, 20,40);
    circle(20, 180,40);
    circle(180, 180,40);
    noFill();
    strokeWeight(20);
    rect(30, 20, 700, 700);
}

function take_snapshot()
{
    save('pic.png');
}


