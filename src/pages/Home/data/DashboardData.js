const DashboardData = [
  { name: "User", text: "Developer" },
  { title: "80", text: "Projects" },
  { title: "$8500", text: "Earned" },
];

const DashboardDataTwo = {
  lastName: (userInfo) =>
    userInfo[0].lastName ? userInfo[0].lastName : "User",
  fullName: (userInfo, title, name) =>
    title
      ? title
      : userInfo[0].firstName
      ? userInfo[0].firstName + " " + userInfo[0].lastName
      : name,
};

export { DashboardData, DashboardDataTwo };
