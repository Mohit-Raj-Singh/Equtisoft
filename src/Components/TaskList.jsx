import React, { useState, useEffect } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://calm-plum-fox-boot.cyclic.cloud/task", {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setTasks(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {tasks.length == 0 ? (
        <div className="font-semibold text-6xl text-grey-600">Create New Task</div>
      ) : (
        <>
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex flex-col md:flex-row bg-gray-100 px-4 rounded-md shadow-md"
            >
              <div className="w-full md:w-1/4 p-2">
                <h2 className="text-lg font-semibold mb-2">Title</h2>
                <p>{task.title}</p>
              </div>
              <div className="w-full md:w-1/4 p-2">
                <h2 className="text-lg font-semibold mb-2">Description</h2>
                <p>{task.desc}</p>
              </div>
              <div className="w-full md:w-1/4 p-2">
                <h2 className="text-lg font-semibold mb-2">Comment</h2>
                <p>{task.comment}</p>
              </div>
              <div className="w-full md:w-1/4 p-2">
                <h2 className="text-lg font-semibold mb-2">Project</h2>
                <p>{task.projectList}</p>
              </div>
              <div className="w-full md:w-1/4 p-2">
                <h2 className="text-lg font-semibold mb-2">Status</h2>
                <p>{task.check ? "Complete" : "Pending"}</p>
              </div>
              <div className="w-full p-2">
                <h2 className="text-lg font-semibold mb-2">Actions</h2>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default TaskList;
