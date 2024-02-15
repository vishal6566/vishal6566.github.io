import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

const Calender = () => {
  const selectLastYearContributions = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const monthsInYear = 12;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const yearDiff = currentYear - date.getFullYear();
      const monthDiff = currentMonth - date.getMonth();
      const totalMonths = yearDiff * monthsInYear + monthDiff;

      return totalMonths <= monthsInYear && totalMonths >= 0;
    });
  };

  return (
    <div>
      <GitHubCalendar
        style={{ margin: "auto" }}
        username="vishal6566"
        transformData={selectLastYearContributions}
        blockSize={10}
        fontSize={10}
      >
        <ReactTooltip delayShow={20} html />
      </GitHubCalendar>
    </div>
  );
};

export default Calender;
