import {
  TeamFiveImg,
  TeamFourImg,
  TeamOneImg,
  TeamThreeImg,
  TeamTwoImg,
} from "../../../images";

const ClientsHead = [
  "Name",
  "Finish Date",
  "Client",
  "Price",
  "Team",
  "Status",
];

const ClientsData = [
  {
    tds: ["Ministry Wikipedia", "10 May 2022", "Ministry", "$5300"],

    imgs: [
      { img: TeamOneImg, alt: "team-1" },
      { img: TeamTwoImg, alt: "team-2" },
      { img: TeamThreeImg, alt: "team-3" },
      { img: TeamFiveImg, alt: "team-5" },
    ],

    status: "Pending",
  },
  {
    tds: ["Aboalwafa Shop", "12 Oct 2021", "AboAlwafa Company", "$1500"],
    imgs: [
      { img: TeamOneImg, alt: "team-1" },
      { img: TeamTwoImg, alt: "team-2" },
      { img: TeamFiveImg, alt: "team-5" },
    ],
    status: "In Progress",
  },
  {
    tds: ["Bouba App", "05 Sep 2021", "Bouba", "$800"],

    imgs: [
      { img: TeamTwoImg, alt: "team-2" },
      { img: TeamThreeImg, alt: "team-3" },
    ],
    status: "Completed",
  },
  {
    tds: ["Mahmoud Website", "22 May 2021", "Mahmoud", "$600"],
    imgs: [
      { img: TeamOneImg, alt: "team-1" },
      { img: TeamTwoImg, alt: "team-2" },
    ],
    status: "Completed",
  },
  {
    tds: ["Sayed Website", "24 May 2021", "Sayed", "$300"],
    imgs: [
      { img: TeamOneImg, alt: "team-1" },
      { img: TeamThreeImg, alt: "team-3" },
    ],
    status: "Rejected",
  },
  {
    tds: ["Arena Application", "01 Mar 2021", "Arena Company", "$2600"],
    imgs: [
      { img: TeamOneImg, alt: "team-1" },
      { img: TeamTwoImg, alt: "team-2" },
      { img: TeamThreeImg, alt: "team-3" },
      { img: TeamFourImg, alt: "team-4" },
    ],
    status: "Completed",
  },
];

export { ClientsHead, ClientsData };
