const DashboardData = [
  { id: 0, title: "User", text: "Developer" },
  { id: 1, title: "0", text: "Projects" },
  { id: 2, title: "$8500", text: "Earned" },
];

const DashboardDataTwo = {
  lastName: (userInfo) =>
    userInfo[0].lastName ? userInfo[0].lastName : "User",
  titleWelcome: (userInfo, userAuth, title, projects, id) => {
    return id != 0 && id == 1
      ? projects.length
      : id === 2
      ? title
      : userAuth
      ? userAuth.displayName
      : "username";
  },
};

export { DashboardData, DashboardDataTwo };
