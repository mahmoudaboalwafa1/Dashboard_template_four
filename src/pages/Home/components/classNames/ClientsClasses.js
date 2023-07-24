import style from "../../../../css/pages/home.module.css";

const ClientsClasses = {
  sectionClass: `${style.clients} bg-light border-r-10 pt-20 pb-20`,
  mainTitle: `${style.center} pb-10 fs-25`,
  thMode: (bodyMode) => {
    return bodyMode.includes("LightMode")
      ? style.client_item
      : style.client_item_dark;
  },
  tableMode: (bodyMode) => {
    return bodyMode.includes("LightMode")
      ? style.clients_table
      : style.clients_table_dark;
  },
  statusClass: (status) => {
    return status.includes("Pending")
      ? style.pend
      : status.includes("Completed")
      ? style.completed
      : status.includes("Rejected")
      ? style.reject
      : style.progr;
  },
};

export default ClientsClasses;
