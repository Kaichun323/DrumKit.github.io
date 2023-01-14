window.addEventListener("keydown", function(e){                 //按下按鍵
    const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`);     //得到對應聲音
    // console.log(audio);
    const dom = document.querySelector(`div[data-key="${e.keyCode}"]`);         //對應到DOM(方塊)
    // console.log(dom);
    if (audio != null){          //沒有音樂的按鍵就不做動作
        audio.currentTime = 0;   //每次按都是重新開始播
        audio.play();
        dom.classList.add("playing");    //讓方塊變顏色
    }
})

function removeTransition(e){      //變換結束之後變回原本的顏色
    // console.log(e);
    if(e.propertyName == "transform"){    //針對變換大小
        // console.log(e.propertyName);
        e.target.classList.remove("playing");    //移除方塊顏色
    }
}

let keyall = document.querySelectorAll(".key");    //得到所有方塊
keyall.forEach(key => key.addEventListener("transitionend", removeTransition));     //監聽每個key的事件