let count = 0;
const timerId = setInterval(()=>
{
    console.log("Node Js is used for backened web development..");
    count++;

    if(count>=5)
    {
        clearInterval(timerId);
        console.log("Done!!");
    }

},2000);