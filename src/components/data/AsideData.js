import AsideClasses from "../classNames/AsideClasses";

const AsideData = [
  { icon: AsideClasses.chartIcon, text: "Dashboard", to: "/" },
  { icon: AsideClasses.gearIcon, text: "Settings", to: "/settings" },
  { icon: AsideClasses.userIcon, text: "Profile", to: "/profile" },
  { icon: AsideClasses.projectIcon, text: "Projects", to: "/projects" },
  { icon: AsideClasses.courseIcon, text: "Courses", to: "/courses" },
  { icon: AsideClasses.firendsIcon, text: "Friends", to: "/friends" },
  { icon: AsideClasses.fileIcon, text: "Files", to: "/files" },
  { icon: AsideClasses.creditIcon, text: "Plans", to: "/plans" },
];

const AsideDataRegiester = [
  { icon: AsideClasses.userIcon, text: "Guest", to: "/guest" },
  { icon: AsideClasses.chartIcon, text: "Signin", to: "/signin" },
  { icon: AsideClasses.gearIcon, text: "Signup", to: "/signup" },
  { icon: AsideClasses.userIcon, text: "Forget Password", to: "/forget" },
];

export { AsideData, AsideDataRegiester };
