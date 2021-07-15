const handleStatusBackgroundColorChange = (
  currentMinutes,
  actualTime,
  maxTime
) => {
  const maxTimeInMinutes =
    parseInt(maxTime.split(":")[0]) * 60 + parseInt(maxTime.split(":")[1]);

  if (actualTime === "") {
    if (currentMinutes > maxTimeInMinutes) {
      setBackground("#dc3545");
      setColor("white");
      setStatus("Overdue");
    } else {
      setBackground("#ffc107");
      setColor("black");
      setStatus("Waiting");
    }
  } else {
    const actualTimeInMinutes =
      parseInt(actualTime.split(":")[0]) * 60 +
      parseInt(actualTime.split(":")[1]);

    if (actualTimeInMinutes < maxTimeInMinutes) {
      setBackground("#0d6efd");
      setColor("white");
      setStatus("On Track");
    } else {
      setBackground("#dc3545");
      setColor("white");
      setStatus("Could be Delayed");
    }
  }

  return { backgroundColor: background };
};

// Live Tracker
// Sla Name, Total No Of Jobs, No of Jobs Completed, Estimated Time Left for Completion, Percentage
// backend will have the jobs in database

// first page
// failure details
// whole log
// solution steps
