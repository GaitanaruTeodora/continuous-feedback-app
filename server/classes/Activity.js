class Activity {
    constructor(id,denumire,descriere,data,durata, dataIncepere, codAcces) {
        this.id = id;
        this.denumire = denumire;
        this.descriere = descriere;
        this.data = data;
        this.durata = durata;
        this.dataIncepere = dataIncepere;
        this.codAcces = codAcces;
        this.feedback = [];
    }

}
module.exports = Activity


