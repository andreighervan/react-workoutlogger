module.exports={
    init:function(){
        localStorage.clear();
        localStorage.setItem('workouts',JSON.stringify([
            {
                id:10001,
                type:'jogging',
                minutes:20,
                miles:2,
                date:new Date()
            },
            {
                id:10002,
                type:'yoga',
                minutes:30,
                miles:3,
                date:new Date()
            }
        ]))
    }
};
