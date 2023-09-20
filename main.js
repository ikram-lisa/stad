// import "./style.scss";
import { getAllStad } from "./script.js";

async function main() {
  const main = document.querySelector(".tableStad");
  const allStaden = await getAllStad();

  const html = allStaden
    .map((stadInfo) => {
      const statsHtml = stadInfo.stats
        .map(
          (state) => `
          <li>${state.maand || "N/A"} - ${state.zon || "N/A"}u</li>
    `
        )
        .join("");

      return `
        <h3>${
          stadInfo.stad
        } - Average Sunshine: ${stadInfo.averageSunshineHours.toFixed(
        2
      )} hours</h3>
        <ul>${statsHtml}</ul>
    `;
    })
    .join("");

  main.innerHTML += html;
}

main();
