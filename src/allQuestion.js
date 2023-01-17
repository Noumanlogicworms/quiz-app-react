import React from "react";

const allQuestion = [
  {
    questionText: "Which of the following is the correct name of React.js? ",
    answerOptions: [
      { answerText: "React", isCorrect: false },
      { answerText: "React.js", isCorrect: false },
      { answerText: "ReactJS", isCorrect: false },
      { answerText: "All of the above", isCorrect: true },
    ],
  },
  {
    questionText: "Which of the following are the advantages of React.js?",
    answerOptions: [
      {
        answerText:
          "React.js can increase the application's performance with Virtual DOM.",
        isCorrect: false,
      },
      {
        answerText:
          "React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.",
        isCorrect: false,
      },
      {
        answerText: "React.js can render both on client and server side.",
        isCorrect: false,
      },
      { answerText: "All of the above", isCorrect: true },
    ],
  },
  {
    questionText: "Which of the following is not a disadvantage of React.js?",
    answerOptions: [
      {
        answerText:
          "React.js has only a view layer. We have put your code for Ajax requests, events and so on.",
        isCorrect: false,
      },
      {
        answerText: "The library of React.js is pretty large.",
        isCorrect: false,
      },
      {
        answerText: "The JSX in React.js makes code easy to read and write",
        isCorrect: true,
      },
      {
        answerText: "The learning curve can be steep in React.js.",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "  Which of the following command is used to install create-react-app?",
    answerOptions: [
      {
        answerText: "npm install -g create-react-app",
        isCorrect: true,
      },
      {
        answerText: "npm install create-react-app",
        isCorrect: false,
      },
      {
        answerText: "npm install -f create-react-app",
        isCorrect: false,
      },
      {
        answerText: "install -g create-react-app",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "What of the following is used in React.js to increase performance?",
    answerOptions: [
      {
        answerText: "Original DOM ",
        isCorrect: false,
      },
      {
        answerText: " Virtual DOM",
        isCorrect: true,
      },
      {
        answerText: "Both A and B. ",
        isCorrect: false,
      },
      {
        answerText: "None of the above. ",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      " A class is a type of function, but instead of using the keyword function to initiate it, which keyword do we use? ",
    answerOptions: [
      {
        answerText: " Constructor",
        isCorrect: false,
      },
      {
        answerText: "Class ",
        isCorrect: true,
      },
      {
        answerText: "Object ",
        isCorrect: false,
      },
      {
        answerText: " DataObject",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      " Which of the following acts as the input of a class-based component? ",
    answerOptions: [
      {
        answerText: "Class ",
        isCorrect: false,
      },
      {
        answerText: " Factory",
        isCorrect: false,
      },
      {
        answerText: "Render ",
        isCorrect: false,
      },
      {
        answerText: " Props",
        isCorrect: true,
      },
    ],
  },
  {
    questionText:
      " Which of the following keyword is used to create a class inheritance?",
    answerOptions: [
      {
        answerText: " Create",
        isCorrect: false,
      },
      {
        answerText: "Inherits ",
        isCorrect: false,
      },
      {
        answerText: " Extends",
        isCorrect: true,
      },
      {
        answerText: " This",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: " What is the default port where webpack-server runs?",
    answerOptions: [
      {
        answerText: "3000 ",
        isCorrect: false,
      },
      {
        answerText: " 8080",
        isCorrect: true,
      },
      {
        answerText: " 3030",
        isCorrect: false,
      },
      {
        answerText: " 6060",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "How many numbers of elements a valid react component can return? ",
    answerOptions: [
      {
        answerText: "1 ",
        isCorrect: true,
      },
      {
        answerText: " 2",
        isCorrect: false,
      },
      {
        answerText: " 4",
        isCorrect: false,
      },
      {
        answerText: " 5",
        isCorrect: false,
      },
    ],
  },
  //   {
  //     questionText: " ",
  //     answerOptions: [
  //       {
  //         answerText: " ",
  //         isCorrect: false,
  //       },
  //       {
  //         answerText: " ",
  //         isCorrect: false,
  //       },
  //       {
  //         answerText: " ",
  //         isCorrect: false,
  //       },
  //       {
  //         answerText: " ",
  //         isCorrect: false,
  //       },
  //     ],
  //   },
];

export default allQuestion;
