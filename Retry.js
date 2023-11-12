class MultiplicatorUnitFailure extends Error {
    constructor(message) {
      super(message);
      this.name = "MultiplicatorUnitFailure";
    }
  }
  
  function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
      return a * b;
    } else {
      throw new MultiplicatorUnitFailure("Multiplication failed");
    }
  }
  
  function reliableMultiply(a, b) {
    while (true) {
      try {
        return primitiveMultiply(a, b);
      } catch (error) {
        // Only catch MultiplicatorUnitFailure exceptions
        if (!(error instanceof MultiplicatorUnitFailure)) {
          throw error; // Rethrow the exception if it's not what we expect
        }
        console.log("Multiplication failed. Retrying...");
      }
    }
  }
  
  // Example usage
  try {
    const result = reliableMultiply(2, 4);
    console.log("Result:", result);
  } catch (error) {
    console.error("Unexpected error:", error.message);
  }
  