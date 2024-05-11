import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';

const questions = [
  {
    header: "Le TPB est caractérisé par des schémas persistants de comportements impulsifs et instables dans les relations interpersonnelles, l'image de soi et les émotions.",
    propositionLabels: ["Vrai", "Faux"],
    multipleChoices: false,
    correctChoices: [0],
  },
  {
    header: "Quel est l'un des symptômes courants du TPB ?",
    propositionLabels: [
      "Peur intense de l'abandon",
      "Hyperphagie compulsive",
      "Apathie généralisée",
      "Altération de la perception de la réalité",
    ],
    multipleChoices: false,
    correctChoices: [0],
  },
  {
    header: "Les relations interpersonnelles des personnes atteintes du TPB sont généralement stables et constantes, sans changements d'idéalisation ou de dévalorisation.",
    propositionLabels: ["Vrai", "Faux"],
    multipleChoices: false,
    correctChoices: [1],
  },
  {
    header: "Quel est un exemple de comportement impulsif courant chez les personnes atteintes du TPB ?",
    propositionLabels: [
      "Planification méticuleuse des événements sociaux",
      "Consommation excessive d'alcool ou de drogues",
      "Pratique régulière de la méditation",
      "Suivi rigoureux d'un régime alimentaire équilibré",
    ],
    multipleChoices: false,
    correctChoices: [1],
  },
  {
    header: "Les personnes atteintes du TPB sont souvent sujettes à des épisodes de dissociation, où elles se sentent déconnectées de la réalité et/ou de leur corps.",
    propositionLabels: ["Vrai", "Faux"],
    multipleChoices: false,
    correctChoices: [0],
  },
  {
    header: "Parmi les affirmations suivantes, quels sont les mythes courants sur le TPB  ? Sélectionne toutes les réponses correctes :",
    propositionLabels: [
      "Les personnes atteintes du TPB sont toutes instables dans leurs relations.",
      "Le TPB est incurable.",
      "Les personnes atteintes du TPB sont manipulatrices.",
      "Le TPB est simplement une forme sévère de dépression.",
    ],
    multipleChoices: true,
    correctChoices: [0, 1, 2],
  },
  {
    header: "Le trouble de la personnalité borderline est souvent diagnostiqué chez les jeunes enfants.",
    propositionLabels: ["Vrai", "Faux"],
    multipleChoices: false,
    correctChoices: [1],
  },
  {
    header: "Quels sont les facteurs qui peuvent contribuer au développement du TPB ? Sélectionne toutes les réponses correctes :",
    propositionLabels: [
      "Génétique",
      "Alimentation déséquilibrée",
      "Facteurs environmentaux",
      "Traumatisme infantile",
    ],
    multipleChoices: true,
    correctChoices: [0, 2, 3],
  },
  {
    header: "Quel est un aspect important de la gestion quotidienne du TPB ?",
    propositionLabels: [
      "Pratiquer la communication non violente",
      "Éviter toute interaction sociale",
      "Se livrer à des comportements autodestructeurs",
      "Ignorer ses émotions",
    ],
    multipleChoices: false,
    correctChoices: [0],
  },
  {
    header: "La pratique de la pleine conscience peut aider à réguler les émotions chez les personnes atteintes du trouble de la personnalité borderline.",
    propositionLabels: ["Vrai", "Faux"],
    multipleChoices: false,
    correctChoices: [0],
  },
  {
    header: "Quel est un traitement thérapeutique efficace dans la réduction de la sévérité des symptômes du TPB ? Sélectionne toutes les réponses correctes :",
    propositionLabels: [
      "La thérapie par électrochocs",
      "La thérapie des schémas de Young",
      "La thérapie psychodynamique",
      "La thérapie comportementale dialectique (TCD)",
    ],
    multipleChoices: true,
    correctChoices: [1, 2, 3],
  },
  {
    header: "Quel est l'un des objectifs de la thérapie comportementale dialectique dans le traitement du TPB ?",
    propositionLabels: [
      "Supprimer complètement les émotions intenses",
      "Apprendre à tolérer la détresse émotionnelle",
      "Ignorer les pensées négatives",
      "Éviter les interactions sociales",
    ],
    multipleChoices: false,
    correctChoices: [1],
  },
]

const root = ReactDOM.createRoot(
  document.getElementById('tpb-quizz-root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App
      questions={questions}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
