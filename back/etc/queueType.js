module.exports = {
    getQueue : function(queue){
        switch (queue){
            case 420 :
                return "솔랭";
            case 430 :
                return "일반";
            case 440 :
                return "자유랭";
            case 450 :
                return "칼바람";
            default :
                return "포로왕";
        }
    }
}