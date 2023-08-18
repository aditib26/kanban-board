const API_URL = "https://api.quicksell.co/v1/internal/frontend-assignment";

async function fetchTickets() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching tickets: ", error);
    throw error;
  }
}

export { fetchTickets };
