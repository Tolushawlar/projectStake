function runRobot(state, robot, memory) {
    for (let turn = 0; ; turn++) {
      if (state.parcels.length === 0) {
        return turn; // Return the number of turns taken to complete the task
      }
      const action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
    }
  }
  
  function compareRobots(robot1, memory1, robot2, memory2, numTasks = 100) {
    let totalSteps1 = 0;
    let totalSteps2 = 0;
  
    for (let i = 0; i < numTasks; i++) {
      const initialState = VillageState.random();
      const steps1 = runRobot(initialState, robot1, memory1);
      const steps2 = runRobot(initialState, robot2, memory2);
      
      totalSteps1 += steps1;
      totalSteps2 += steps2;
    }
  
    const averageSteps1 = totalSteps1 / numTasks;
    const averageSteps2 = totalSteps2 / numTasks;
  
    console.log(`Robot 1 took an average of ${averageSteps1} steps per task.`);
    console.log(`Robot 2 took an average of ${averageSteps2} steps per task.`);
  }
  
  // Example usage:
  compareRobots(routeRobot, [], goalOrientedRobot, []);




  function efficientRobot({place, parcels}, route) {
    if (route.length === 0) {
      let routeToParcel = findShortestPathToParcel(place, parcels);
      if (routeToParcel) {
        route = routeToParcel;
      } else {
        let parcel = parcels[0];
        route = findShortestPathToAddress(place, parcel.address);
      }
    }
    return { direction: route[0], memory: route.slice(1) };
  }
  
  function findShortestPathToParcel(startPlace, parcels) {
    // Find the nearest parcel based on the BFS algorithm
    let shortestPath = null;
    for (let parcel of parcels) {
      let path = findRoute(roadGraph, startPlace, parcel.place);
      if (path && (!shortestPath || path.length < shortestPath.length)) {
        shortestPath = path;
      }
    }
    return shortestPath;
  }
  
  function findShortestPathToAddress(startPlace, address) {
    // Find the shortest path to the destination address based on the BFS algorithm
    return findRoute(roadGraph, startPlace, address);
  }
  
  // Example usage:
  runRobotAnimation(VillageState.random(), efficientRobot, []);




  class PGroup {
    constructor(members) {
      this.members = members;
    }
  
    add(value) {
      if (this.has(value)) {
        return this;
      } else {
        return new PGroup(this.members.concat(value));
      }
    }
  
    delete(value) {
      if (!this.has(value)) {
        return this;
      } else {
        return new PGroup(this.members.filter(v => v !== value));
      }
    }
  
    has(value) {
      return this.members.includes(value);
    }
  }
  
  PGroup.empty = new PGroup([]);
  
  // Example usage:
  let group = PGroup.empty.add(1).add(2).add(3);
  console.log(group.has(2)); // true
  let newGroup = group.delete(2);
  console.log(newGroup.has(2)); // false
  