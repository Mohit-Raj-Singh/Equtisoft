import axios from "axios";
import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const Task = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [check, setCheck] = useState(false);
  const [comment, setComment] = useState("");
  const [projectList, setProjectList] = useState("");

  const handleCheckboxChange = () => {
    setCheck(!check);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskData = {
      title,
      desc,
      check,
      comment,
      projectList,
    };
    console.log(taskData);

    const token = localStorage.getItem("token");
    axios
      .post("https://calm-plum-fox-boot.cyclic.cloud/task/add", taskData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        alert("Task added.")
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" p-4">
      {/* <Navbar /> */}
      <h2 className="text-3xl text-gray-800 font-semibold mb-4">Create a New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-6 p-6">
        <div>
          <label htmlFor="taskName" className="font-medium mb-1">
            Task Name
          </label>

          <input
            type="text"
            id="taskName"
            className="w-1/2 border border-gray-300 p-2 rounded-md ml-6"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="font-medium mb-1">
            Description
          </label>
          <input
            type="text"
            id="description"
            className="w-1/2 border border-gray-300 p-2 rounded-md ml-6"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
          {/* <textarea
            id=""
            className="w-1/2 border border-gray-300 p-2 rounded-md ml-6"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          /> */}
        </div>
        {/* <div>
          <label htmlFor="dueDate" className=" font-medium mb-1">
            Status
          </label>
          <input
            type="checkbox"
            checked={check}
            onChange={handleCheckboxChange}
            className="form-checkbox text-blue-500"
          />
        </div> */}
        <div>
          <label htmlFor="comment" className=" font-medium mb-1">
            Comment
          </label>
          <input
            type="text"
            id="comment"
            className="w-1/2 border border-gray-300 p-2 rounded-md ml-6"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="comment" className=" font-medium mb-1">
            Project
          </label>
          <input
            type="text"
            id="project"
            className="w-1/2 border border-gray-300 p-2 rounded-md ml-12"
            value={projectList}
            onChange={(e) => setProjectList(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default Task;
