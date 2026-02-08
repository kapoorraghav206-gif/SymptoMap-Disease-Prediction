export function getRiskLevel(caseCount) {
  if (caseCount === 0) return 'No Data';
  if (caseCount <= 10) return 'Low';
  if (caseCount <= 30) return 'Medium';
  return 'High';
}

export function getDistrictColor(caseCount) {
  if (caseCount === 0) return '#e2e8f0';
  if (caseCount <= 10) return '#22c55e';
  if (caseCount <= 30) return '#f59e0b';
  return '#ef4444';
}

export function aggregateDistrictData(reports) {
  const districtMap = {};

  reports.forEach(report => {
    const city = report.city;
    if (!districtMap[city]) {
      districtMap[city] = 0;
    }
    districtMap[city] += 1;
  });

  return districtMap;
}
