const composeWeeksConfig = (totalWeeks = 9) => {
  return Object.fromEntries(
    Array.from({ length: totalWeeks }, (_value, index) => {
      return [`week_${index}`, `Week ${index}`];
    }),
  );
};

export default {
  index: "Overview",
  goals: "Goals",
  ...composeWeeksConfig(),
};
