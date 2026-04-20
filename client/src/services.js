const url = import.meta.env.VITE_BACKEND_URL;

if (!url) {
  console.error("VITE_BACKEND_URL is not configured");
}

async function handleResponse(response) {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function userSignup({ firstName, lastName, email, password }) {
  try {
    const response = await fetch(`${url}/user/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ firstName, lastName, email, password }),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("User signup error:", error);
    return { error: error.message };
  }
}

export async function userSignin({ email, password }) {
  try {
    const response = await fetch(`${url}/user/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("User signin error:", error);
    return { error: error.message };
  }
}

export async function adminSignup({ firstName, lastName, email, password }) {
  try {
    const response = await fetch(`${url}/admin/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ firstName, lastName, email, password }),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("Admin signup error:", error);
    return { error: error.message };
  }
}

export async function adminSignin({ email, password }) {
  try {
    const response = await fetch(`${url}/admin/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("Admin signin error:", error);
    return { error: error.message };
  }
}

export async function getCourses() {
  try {
    const response = await fetch(`${url}/course/preview`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    const data = await handleResponse(response);
    return data.course || [];
  } catch (error) {
    console.error("Get courses error:", error);
    return [];
  }
}

export async function purchaseCourse(courseId) {
  try {
    const token = localStorage.getItem("userToken");
    const response = await fetch(`${url}/course/purchase`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
      body: JSON.stringify({ courseId }),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("Purchase course error:", error);
    return { error: error.message };
  }
}

export async function getUserPurchases() {
  try {
    const token = localStorage.getItem("userToken");
    const response = await fetch(`${url}/user/purchases`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("Get user purchases error:", error);
    return { courses: [] };
  }
}

export async function getAdminCourses() {
  try {
    const token = localStorage.getItem("adminToken");
    const response = await fetch(`${url}/admin/course`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });
    const data = await handleResponse(response);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Get admin courses error:", error);
    return [];
  }
}

export async function createCourse({ title, description, price, imageURL }) {
  try {
    const token = localStorage.getItem("adminToken");
    const response = await fetch(`${url}/admin/course`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
      body: JSON.stringify({ title, description, price, imageURL }),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("Create course error:", error);
    return { error: error.message };
  }
}

export async function updateCourse({ courseId, title, description, price, imageURL }) {
  try {
    const token = localStorage.getItem("adminToken");
    const response = await fetch(`${url}/admin/course`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
      body: JSON.stringify({ courseId, title, description, price, imageURL }),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("Update course error:", error);
    return { error: error.message };
  }
}
