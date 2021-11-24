// Emulare baza de date
const activities = [
    {
      id: 1,
      denumire: "Seminar",
      descriere: "Node Js & express",
      data: "18.12.2021",
      durata:"1h:40",
      dataIncepere: "15:30",
      codAcces: "S1812",
      feedback : []
    },
    {
      id: 2,
      denumire: "Curs",
      descriere: "React",
      data: "25.11.2021",
      durata:"2h",
      dataIncepere: "11:30",
      codAcces: "C2511",
      feedback : []
    },
    {
      id: 3,
      denumire: "Seminar",
      descriere: "React",
      data: "11.12.2021",
      durata:"2h",
      dataIncepere: "9:30",
      codAcces: "S1112",
      feedback : []
    },
  ];

  const students = [
    {
      id: 1,
      nume: "Fotin",
      prenume: "Laura",
      grupa: "1084"
    },
    {
      id: 2,
      nume: "Popescu",
      prenume: "Ioana",
      grupa: "1090"
    }
  ];

  const feedbacks = [
    {
      data:"August 19 2021 08:10:25",
      idActivitate: 1,
      emoji: "s"
    },
    {
      data:"October 10 2021 10:10:25",
      idActivitate: 2,
      emoji: "c"
    },
  ];
  module.exports = {
    activities,students,feedbacks
  };
  