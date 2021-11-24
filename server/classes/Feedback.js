const emoji ={
    SMILEY: "s",
    FROWNY : "f",
    SURPRISED: "s",
    CONFUSED: "c",
};

class Feedback{
    constructor(data,idActivitate,emoji)
    {
        this.data = data;
        this.idActivitate = idActivitate;
        this.emoji = emoji;
    }
}

module.exports = Feedback