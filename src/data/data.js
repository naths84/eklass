const data = {
  classLevels: {
    "9": {
      name: "9e",
      //subjects: ["id-901", "id-902", "id-903"],
      subjects: ["id-902"],
    },
    "10": {
      name: "10e",
      //subjects: ["id-1001", "id-1002", "id-1003"],
      subjects: ["id-1003"],
    },
    "11": {
      name: "11e",
      //subjects: ["id-1101", "id-1102", "id-1103"],
      subjects: ["id-1101","id-1103"],
    },
  },

  subjects: {
    "id-901": "functions&algebra",
    "id-902": "numbers",
    "id-903": "units&sizes",
    "id-1001": "functions&algebra",
    "id-1002": "numbers",
    "id-1003": "units&sizes",
    "id-1101": "functions&algebra",
    "id-1102": "numbers",
    "id-1103": "units&sizes",
  },

  subjectCompetences: {
    "id-901": {
      subject : "id-901",
      //competences : ["id-901-c1"],
      competences : [""],
    },
    "id-902": {
      subject : "id-902",
      competences : ["id-902-c8"],
      //competences : ["id-902-c1", "id-902-c2", "id-902-c3", "id-902-c4", "id-902-c5", "id-902-c6", "id-902-c7"],
    },
    "id-903": {
      subject : "id-903",
      //competences : ["id-903-c1"],
      competences : [""],
    },
    "id-1001": {
      subject : "id-1001",
      //competences : ["id-1001-c1"],
      competences : [""],
    },
    "id-1002": {
      subject : "id-1002",
      //competences : ["id-1002-c1"],
      competences : [""],
    },
    "id-1003": {
      subject : "id-1003",
      competences : ["id-1003-c1"],
    },
    "id-1101": {
      subject : "id-1101",
      competences : ["id-1101-c1"],
    },
    "id-1102": {
      subject : "id-1102",
      //competences : ["id-1102-c1"],
      competences : [""],
    },
    "id-1103": {
      subject : "id-1103",
      competences : ["id-1103-c1"],
    },
  },

  competences: {
    "id-901-c1": "id-901-c1",
    "id-902-c1": "id-903-c1",
    "id-902-c2": "id-903-c2",
    "id-902-c3": "id-903-c3",
    "id-902-c4": "id-903-c4",
    "id-902-c5": "id-903-c5",
    "id-902-c6": "id-902-c1",
    "id-902-c7": "id-902-c2",
    "id-903-c1": "id-902-c1",
    "id-1001-c1": "id-1001-c1",
    "id-1002-c1": "id-1002-c1",
    "id-1003-c1": "id-1003-c1",
    "id-1101-c1": "id-1101-c1",
    "id-1102-c1": "id-1102-c1",
    "id-1103-c1": "id-1103-c1",
  },
};

export default data;