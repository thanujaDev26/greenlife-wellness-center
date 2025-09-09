import React, { useState } from "react";

const Blog = () => {
  const ADMIN_PASSWORD = "admin123"; // change to secure password or use env

  const [blogs, setBlogs] = useState([
    { id: 1, title: "Introduction to Mental Health", content: "Content of blog 1", date: "2024-09-01" },
    { id: 2, title: "Benefits of Physiotherapy", content: "Content of blog 2", date: "2024-09-02" },
    { id: 3, title: "Tips for Better Sleep", content: "Content of blog 3", date: "2024-09-03" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null); // null for adding new blog
  const [password, setPassword] = useState("");

  const openAddModal = () => {
    setCurrentBlog({ title: "", content: "", date: new Date().toISOString().split("T")[0] });
    setIsModalOpen(true);
  };

  const openEditModal = (blog) => {
    const enteredPassword = prompt("Enter admin password to edit:");
    if (enteredPassword === ADMIN_PASSWORD) {
      setCurrentBlog(blog);
      setIsModalOpen(true);
    } else {
      alert("Incorrect password!");
    }
  };

  const handleDelete = (blogId) => {
    const enteredPassword = prompt("Enter admin password to delete:");
    if (enteredPassword === ADMIN_PASSWORD) {
      if (window.confirm("Are you sure you want to delete this blog?")) {
        setBlogs(blogs.filter((b) => b.id !== blogId));
      }
    } else {
      alert("Incorrect password!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentBlog({ ...currentBlog, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentBlog.id) {
      // edit existing
      setBlogs(blogs.map((b) => (b.id === currentBlog.id ? currentBlog : b)));
    } else {
      // add new
      const newBlog = { ...currentBlog, id: blogs.length + 1 };
      setBlogs([...blogs, newBlog]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 bg-neutral-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-brand-800">Manage Blogs</h2>

      <button
        onClick={openAddModal}
        className="mb-6 px-4 py-2 bg-brand-600 text-white rounded hover:bg-brand-700 transition-colors"
      >
        Add New Blog
      </button>

      {/* Modal */}
      {isModalOpen && currentBlog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">{currentBlog.id ? "Edit Blog" : "Add New Blog"}</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="title"
                value={currentBlog.title}
                onChange={handleChange}
                placeholder="Blog Title"
                className="border px-3 py-2 rounded w-full"
                required
              />
              <textarea
                name="content"
                value={currentBlog.content}
                onChange={handleChange}
                placeholder="Blog Content"
                className="border px-3 py-2 rounded w-full"
                rows={5}
                required
              />
              <input
                type="date"
                name="date"
                value={currentBlog.date}
                onChange={handleChange}
                className="border px-3 py-2 rounded w-full"
              />
              <div className="flex justify-end gap-3 mt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-brand-600 text-white rounded hover:bg-brand-700 transition-colors"
                >
                  {currentBlog.id ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow rounded-lg p-4 flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-semibold">{blog.title}</h4>
              <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
              <p className="text-gray-700">{blog.content}</p>
            </div>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => openEditModal(blog)}
                className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(blog.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
