import BackupClasses from "../classNames/BackupClasses";

const BackupDataOne = [
  { id: "daily", className: BackupClasses.alignCenter, word: "Daily" },
  {
    id: "weekly",
    className: BackupClasses.alignCenter.slice(0, -6),
    word: "Weekly",
  },
  {
    id: "monthly",
    className: BackupClasses.alignCenter.slice(0, -6),
    word: "Monthly",
  },
];

const BackupDataTwo = [
  { id: "megaman", word: "Megaman", iconServer: BackupClasses.serverIcon },
  { id: "super", word: "Super", iconServer: BackupClasses.serverIcon },
  { id: "Sigma", word: "Megaman", iconServer: BackupClasses.serverIcon },
];

export { BackupDataOne, BackupDataTwo };
