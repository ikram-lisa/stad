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
          <li>${
            state.maand.charAt(0).toUpperCase() + state.maand.slice(1) || "N/A"
          } - ${state.zon || "N/A"}</li>
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
