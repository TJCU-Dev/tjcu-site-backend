var sleep = (time)=> {
    return new Promise( (resolve, reject) => {
        setTimeout( ()=>{
            resolve();
        }, time);
    })
};

var start = async  ()=> {
    // 在这里使用起来就像同步代码那样直观
    console.log('start');
    await sleep(3000);
    console.log('end');
};

start();
