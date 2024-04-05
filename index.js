try {
  console.log("Takeover by Dharmendra");

  // Example asynchronous operation that might fail
  // Replace this with your actual code
  setTimeout(() => {
    // Simulating an error
    throw new Error("Simulated error");
  }, 1000);
} catch (error) {
  console.error("An error occurred:", error.message);
}
