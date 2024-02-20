const timer = document.getElementById("stopwatch");
var sec = 0;
var min = 0;
var hr = 0;
var stopTime = true;

function startTimer()
{
    if(stopTime==true)
    {
        stopTime=false;
        timerCycle();
    }

}

function stopTimer()
{
    if(stopTime==false)
    {
        stopTime=true;
    }
}

function resetTimer()
{
    timer.innerHTML = "00:00:00";
    stopTime = true;
    hr = 0;
    min = 0;
    sec = 0;

}

function timerCycle()
{
    if(stopTime==false)
    {
        sec = parseInt(sec);
        hr = parseInt(hr);
        min = parseInt(min);

        sec = sec + 1;
        if(sec==60)
        {
            min = min+1;
            sec = 0;
        }

        if(min==60)
        {
            hr = hr + 1;
            sec = 0;
            min = 0;
        }

        if(sec<10)
        {
            sec = "0"+sec;
        }

        if(min<10)
        {
            min = "0"+min;
        }
        if(hr<10)
        {
            hr = "0"+hr;
        }

        timer.innerHTML = hr+":"+min+":"+sec;
        setTimeout("timerCycle()",1000);
    }
}