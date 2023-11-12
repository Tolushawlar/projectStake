const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
  };
  
  function withBoxUnlocked(body) {
    let wasLocked = box.locked;
  
    try {
      if (wasLocked) {
        box.unlock();
      }
  
      // Run the provided function
      body();
    } catch (error) {
      console.error("An error occurred:", error.message);
    } finally {
      // Ensure the box is locked again
      if (wasLocked) {
        box.lock();
      }
    }
  }
  
  // Example usage
  withBoxUnlocked(function() {
    box.content.push("gold piece");
    console.log(box.content); // ["gold piece"]
  });
  
  // The box is locked again outside the withBoxUnlocked function
  try {
    console.log(box.content); // This should throw an error
  } catch (error) {
    console.error("Error accessing content:", error.message);
  }
  