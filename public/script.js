document.addEventListener("DOMContentLoaded", async () => {
  const quoteDiv = document.getElementById("quote");
  const backgrounds = [
    "https://source.unsplash.com/random/1920x1080/?donald,lame",
    "https://source.unsplash.com/random/1920x1080/?trump,stupid",
    "https://source.unsplash.com/random/1920x1080/?trump,shame",
    "https://source.unsplash.com/random/1920x1080/?trump,disapoint",
  ];

  // Preload background image
  const preloadImage = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = reject;
      img.src = url;
    });
  };

  try {
    // Set a random background after it's loaded
    const randomBackgroundUrl =
      backgrounds[Math.floor(Math.random() * backgrounds.length)];
    await preloadImage(randomBackgroundUrl);
    document.body.style.backgroundImage = `url(${randomBackgroundUrl})`;

    // Fetch and display quote
    const response = await fetch("/quote");
    const data = await response.json();
    quoteDiv.textContent = data.value;

    // Show content
    quoteDiv.style.display = "block";
  } catch (error) {
    // Handle errors
    quoteDiv.textContent = "Failed to load quote";
    quoteDiv.style.display = "block";
  }
});
