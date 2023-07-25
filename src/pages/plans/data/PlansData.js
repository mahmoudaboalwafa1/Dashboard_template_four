import style from "../../../css/pages/plans.module.css";

const PlansData = [
  {
    color: "green",
    name: "Free",
    price: "0.00",
    access: [
      { premission: `fa-check ${style.yes}`, text: "Access All Text Lessons" },
      {
        premission: `fa-check ${style.yes}`,
        text: "Access All Videos Lessons",
      },
      { premission: `fa-check ${style.yes}`, text: "Appear On Leaderboard" },
      {
        premission: `fa-xmark ${style.no}`,
        text: "Browse Content Without Ads",
      },
      { premission: `fa-xmark ${style.no}`, text: "Access All Assignments" },
      { premission: `fa-xmark ${style.no}`, text: "Get Daily Prizes" },
      { premission: `fa-xmark ${style.no}`, text: "Earn Certificate" },
      {
        premission: `fa-xmark ${style.no}`,
        text: "1 GB Space For Hosting Files",
      },
      { premission: `fa-xmark ${style.no}`, text: "Access Badge System" },
    ],
    join: "Join",
    btnColor: "joing",
    current: "",
  },
  {
    color: "blue",
    name: "Basic",
    price: "7.99",
    access: [
      { premission: `fa-check ${style.yes}`, text: "Access All Text Lessons" },
      {
        premission: `fa-check ${style.yes}`,
        text: "Access All Videos Lessons",
      },
      { premission: `fa-check ${style.yes}`, text: "Appear On Leaderboard" },
      {
        premission: `fa-check ${style.yes}`,
        text: "Browse Content Without Ads",
      },
      { premission: `fa-check ${style.yes}`, text: "Access All Assignments" },
      { premission: `fa-check ${style.yes}`, text: "Get Daily Prizes" },
      { premission: `fa-check ${style.yes}`, text: "Earn Certificate" },
      {
        premission: `fa-xmark ${style.no}`,
        text: "1 GB Space For Hosting Files",
      },
      { premission: `fa-xmark ${style.no}`, text: "Access Badge System" },
    ],
    join: "join",
    btnColor: "joino",
    current: "",
  },
  {
    color: "orange",
    name: "Premium",
    price: "19.99",
    access: [
      { premission: `fa-check ${style.yes}`, text: "Access All Text Lessons" },
      {
        premission: `fa-check ${style.yes}`,
        text: "Access All Videos Lessons",
      },
      { premission: `fa-check ${style.yes}`, text: "Appear On Leaderboard" },
      {
        premission: `fa-check ${style.yes}`,
        text: "Browse Content Without Ads",
      },
      { premission: `fa-check ${style.yes}`, text: "Access All Assignments" },
      { premission: `fa-check ${style.yes}`, text: "Get Daily Prizes" },
      { premission: `fa-check ${style.yes}`, text: "Earn Certificate" },
      {
        premission: `fa-check ${style.yes}`,
        text: "1 GB Space For Hosting Files",
      },
      { premission: `fa-check ${style.yes}`, text: "Access Badge System" },
    ],
    join: "This Is Your Current Plan",
    current: "current",
    btnColor: "",
  },
];

export default PlansData;
