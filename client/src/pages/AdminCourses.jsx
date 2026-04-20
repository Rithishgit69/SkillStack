import { useEffect, useState } from "react";
import { getAdminCourses, createCourse, updateCourse } from "../services";

function AdminCourses() {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", price: "", imageURL: "" });
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  function fetchCourses() {
    getAdminCourses().then((data) => {
      setCourses(Array.isArray(data) ? data : []);
      setLoading(false);
    });
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    
    if (!form.title || !form.description || !form.price || !form.imageURL) {
      setMessage("All fields are required");
      return;
    }

    if (editId) {
      const res = await updateCourse({ courseId: editId, ...form, price: Number(form.price) });
      if (res.error) {
        setMessage(`Error: ${res.error}`);
      } else {
        setMessage("✓ Course updated successfully!");
      }
    } else {
      const res = await createCourse({ ...form, price: Number(form.price) });
      if (res.error) {
        setMessage(`Error: ${res.error}`);
      } else {
        setMessage("✓ Course created successfully!");
      }
    }
    
    setForm({ title: "", description: "", price: "", imageURL: "" });
    setEditId(null);
    setTimeout(() => setMessage(""), 3000);
    fetchCourses();
  }

  function handleEdit(course) {
    setEditId(course._id);
    setForm({
      title: course.title,
      description: course.description,
      price: course.price,
      imageURL: course.imageURL,
    });
  }

  function handleCancel() {
    setEditId(null);
    setForm({ title: "", description: "", price: "", imageURL: "" });
  }

  return (
    <div className="min-h-screen py-12 px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-[#F3F0FF] mb-2">Manage Your Courses</h1>
        <p className="text-[#A89BC6]">Create, edit, and manage your courses</p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Create/Edit Form */}
        <div className="bg-[#1E1538] border border-[rgba(124,58,237,0.3)] rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#F3F0FF] mb-6">
            {editId ? "Edit Course" : "Create New Course"}
          </h2>

          {message && (
            <div className={`mb-6 p-4 rounded-lg ${
              message.includes("Error")
                ? "bg-red-900/30 border border-red-700/50 text-red-400"
                : "bg-green-900/30 border border-green-700/50 text-green-400"
            }`}>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-[#A89BC6] font-medium mb-2">Course Title</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Enter course title"
                className="w-full bg-[#0F0A1E] border border-[rgba(124,58,237,0.2)] px-4 py-2 rounded-lg text-[#F3F0FF] placeholder-[#A89BC6]/50 focus:outline-none focus:border-[#7C3AED]"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-[#A89BC6] font-medium mb-2">Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Enter course description"
                className="w-full bg-[#0F0A1E] border border-[rgba(124,58,237,0.2)] px-4 py-2 rounded-lg text-[#F3F0FF] placeholder-[#A89BC6]/50 focus:outline-none focus:border-[#7C3AED] h-24"
                required
              />
            </div>

            <div>
              <label className="block text-[#A89BC6] font-medium mb-2">Price ($)</label>
              <input
                name="price"
                type="number"
                value={form.price}
                onChange={handleChange}
                placeholder="0.00"
                className="w-full bg-[#0F0A1E] border border-[rgba(124,58,237,0.2)] px-4 py-2 rounded-lg text-[#F3F0FF] placeholder-[#A89BC6]/50 focus:outline-none focus:border-[#7C3AED]"
                required
              />
            </div>

            <div>
              <label className="block text-[#A89BC6] font-medium mb-2">Image URL</label>
              <input
                name="imageURL"
                value={form.imageURL}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className="w-full bg-[#0F0A1E] border border-[rgba(124,58,237,0.2)] px-4 py-2 rounded-lg text-[#F3F0FF] placeholder-[#A89BC6]/50 focus:outline-none focus:border-[#7C3AED]"
                required
              />
            </div>

            <div className="md:col-span-2 flex gap-3">
              <button
                type="submit"
                className="flex-1 bg-[#F59E0B] text-[#0F0A1E] py-2 rounded-lg hover:bg-[#FBBF24] font-semibold transition"
              >
                {editId ? "Update Course" : "Create Course"}
              </button>
              {editId && (
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-6 bg-[#A89BC6] text-[#0F0A1E] py-2 rounded-lg hover:bg-[#D1C4E9] font-semibold transition"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Courses Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="text-xl text-[#A89BC6]">Loading your courses...</div>
          </div>
        ) : courses.length === 0 ? (
          <div className="text-center py-12 bg-[#1E1538] border border-[rgba(124,58,237,0.3)] rounded-2xl p-8">
            <div className="text-5xl mb-4">📝</div>
            <h2 className="text-2xl font-bold text-[#F3F0FF] mb-2">No courses yet</h2>
            <p className="text-[#A89BC6]">Create your first course using the form above</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course._id}
                className="bg-[#1E1538] border border-[rgba(124,58,237,0.18)] rounded-xl overflow-hidden hover:border-[#7C3AED] hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition group"
              >
                {/* Course Image */}
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-[#7C3AED]/40 to-[#F59E0B]/40">
                  <img
                    src={course.imageURL}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/300x200?text=" + encodeURIComponent(course.title);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0A1E] to-transparent"></div>
                </div>

                {/* Course Info */}
                <div className="p-5 space-y-4">
                  <h3 className="text-lg font-bold text-[#F3F0FF] line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-[#A89BC6] text-sm line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-[#F59E0B]">
                      ${course.price}
                    </span>
                    <span className="text-[#A89BC6] text-xs">
                      ID: {course._id.slice(-6)}
                    </span>
                  </div>

                  <button
                    onClick={() => handleEdit(course)}
                    className="w-full bg-[#7C3AED] text-[#F3F0FF] py-2 rounded-lg hover:bg-[#6D28D9] font-semibold transition"
                  >
                    Edit Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminCourses;
