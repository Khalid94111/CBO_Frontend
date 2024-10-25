export function loadOptionsStringify(loadOptions) {
  isNotEmpty(loadOptions.group)
    ? (loadOptions.group = JSON.stringify(loadOptions.group))
    : (loadOptions.group = loadOptions.group);

  isNotEmpty(loadOptions.sort)
    ? (loadOptions.sort = JSON.stringify(loadOptions.sort))
    : (loadOptions.sort = loadOptions.sort);
  loadOptions.groupSummary = JSON.stringify(loadOptions.groupSummary);
  loadOptions.filter = JSON.stringify(loadOptions.filter);
  loadOptions.userData = JSON.stringify(loadOptions.userData);
  loadOptions.totalSummary = JSON.stringify(loadOptions.totalSummary);
  loadOptions.groupSummary = JSON.stringify(loadOptions.groupSummary);

  return loadOptions;
}
function isNotEmpty(value: any) {
  return value !== undefined && value !== null && value !== '';
}
