const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "Kepler exploration X",
  rocket: "Explore IS1",
  launchDate: new Date("December 27, 2030"),
  target: "Kepler-442 b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function existsLaunchesWidthId(launchId) {
  return launches.has(launchId);
}

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customers: ["Zero to mastery", "Nasa"],
      flightNumber: latestFlightNumber,
    })
  );
}

function abortLaunchById(launch) {
  const aborted = launches.delete(launchId);
  aborted.upcoming = false;
  aborted.success = false;
}
module.exports = {
  getAllLaunches,
  addNewLaunch,
  existsLaunchesWidthId,
  abortLaunchById,
};
