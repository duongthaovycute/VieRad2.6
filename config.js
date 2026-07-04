window.VIERAD_CONFIG = {
  apiUrl: "https://ql4drki257.execute-api.ap-southeast-2.amazonaws.com/prod/latest",
  stationId: "new_station",
  stationNameVi: "Trạm NEW",
  stationNameEn: "NEW Station",
  stationAddressVi: "Trạm giám sát bức xạ VieRad",
  stationAddressEn: "VieRad Radiation Monitoring Station",
  refreshSeconds: 5,
  maxHistoryPoints: 2000,
  thresholds: {
    caution: 0.5,
    warning: 1.0,
    danger: 4.0
  },
  apkPath: "https://github.com/duongthaovycute/VieRad3.3/releases/download/v3.8.0/VieRad.apk",
  apkVersion: "v3.8.0",
  developer: "Dương Thảo Vy",
  organization: "HCMUS"
};
