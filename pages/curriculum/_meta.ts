const composeWeeksConfig = (totalWeeks = 9) => {
  return Object.fromEntries(
    Array.from({ length: totalWeeks }, (_value, index) => {
      if (index === 0) {
        return [`week_${index}`, "Kickoff"];
      } else {
        return [`week_${index}`, `Week ${index}`];
      }
    }),
  );
};

export default {
  index: "Overview",
  goals: "Goals",
  ...composeWeeksConfig(),
};
