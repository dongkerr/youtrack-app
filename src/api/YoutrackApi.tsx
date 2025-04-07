const API_URL = import.meta.env.VITE_YOUTRACK_URL;
const API_TOKEN = import.meta.env.VITE_YOUTRACK_TOKEN;

console.log("API_URL:", API_URL);
console.log("API_TOKEN:", API_TOKEN ? "Loaded" : "Missing!");


export async function fetchProjects() {
  try {
    console.log("Fetching projects from:", API_URL); // Debugging
    const response = await fetch(`${API_URL}/api/admin/projects?fields=id,name,description`, {
      // const response = await fetch(`${API_URL}/api/issues?fields=id,summary,state`, {
      headers: {
        "Authorization": `Bearer ${API_TOKEN}`,
        "Accept": "application/json",
      },
    });
    console.log("Response status:", response.status);


    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Projects fetched:", data);
    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export async function updateProjectFlag(projectId: string, isEnabled: boolean) {
  try {
    const response = await fetch(`${API_URL}/api/admin/projects/${projectId}/customFields`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'isEnabled',
        value: isEnabled,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error updating project flag:', error);
    throw error;
  }
}
