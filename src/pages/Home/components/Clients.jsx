import React from "react";
import { ClientsData, ClientsHead } from "../data/ClientsData";
import { useSelector } from "react-redux";
import ClientsClasses from "./classNames/ClientsClasses";

const Clients = () => {
  const bodyMode = useSelector((state) => state.modeNow);
  const { sectionClass, mainTitle, thMode, tableMode, statusClass } =
    ClientsClasses;
  return (
    <section className={sectionClass}>
      <div className="container">
        <h1 className={mainTitle}>Projects</h1>
      </div>
      <table>
        <thead>
          <tr>
            {ClientsHead.map((client) => (
              <th key={client} className={thMode(bodyMode)}>
                {client}
              </th>
            ))}
          </tr>
        </thead>
      </table>
      {ClientsData.map((client, index) => {
        const { tds, imgs, status } = client;
        return (
          <table className={tableMode(bodyMode)} key={index}>
            <tbody>
              <tr>
                {tds.map((td) => (
                  <td key={td}>{td}</td>
                ))}

                <td>
                  {imgs.map((img, index) => (
                    <img key={index} src={img.img} alt={img.alt} />
                  ))}
                </td>
                <td className={statusClass(status)}>
                  <p>{status}</p>
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </section>
  );
};

export default Clients;
