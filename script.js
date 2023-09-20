export const getAllStad = async () => {
  const response = await fetch("https://ap-examen.surge.sh/zon.json");
  const data = await response.json();

  return data.map((city) => {
    const totalSunshineHours = city.stats.reduce(
      (sum, state) => sum + state.zon,
      0
    );
    const averageSunshineHours = totalSunshineHours / city.stats.length;

    return {
      stad: city.stad,
      totalSunshineHours,
      averageSunshineHours,
      stats: city.stats.map((state) => ({
        maand: state.maand,
        zon: state.zon,
      })),
    };
  });
};
// getAllStad();
