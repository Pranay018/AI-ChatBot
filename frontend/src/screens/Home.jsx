import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/user.context';
import axios from "../config/axios";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { user } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  function createProject(e) {
    e.preventDefault();
    axios.post('/projects/create', { name: projectName })
      .then((res) => {
        setIsModalOpen(false);
        setProjectName('');
        setProjects([...projects, res.data.project]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    axios.get('/projects/all')
      .then((res) => {
        setProjects(res.data.projects || []);
      })
      .catch(err => {
        console.log(err);
        if (err.response?.status === 401) {
          navigate('/login');
        } else {
          setProjects([]);
        }
      });
  }, [navigate]);

  return (
    // Main container: vertical flex layout, center horizontally with padding and min height
    <main className="relative min-h-screen p-6 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 text-white flex flex-col items-center gap-10">

      {/* Buttons container at top, horizontally centered with wrapping */}
      <div className="flex flex-wrap justify-center gap-6 z-10">
        <button
          onClick={() => setIsModalOpen(true)}
          className="project flex items-center gap-2 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all"
        >
          <i className="ri-add-circle-line text-lg"></i>
          <span className="font-medium">New Project</span>
        </button>

        {projects?.map((proj) => (
          <div
            key={proj?._id || Math.random()}
            onClick={() => navigate(`/project`, { state: { project: proj } })}
            className="project flex flex-col gap-3 cursor-pointer px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all min-w-52"
          >
            <h2 className="font-semibold text-lg">{proj?.name || 'Untitled Project'}</h2>
            <div className="flex items-center gap-2 text-sm">
              <i className="ri-user-line"></i>
              <span>{proj?.users?.length || 0} Collaborators</span>
            </div>
          </div>
        ))}
      </div>

      {/* Background image card centered below buttons */}
      <div
        className="
          w-[600px] h-[400px]
          bg-[url('/images/robothome.png')]
          bg-cover bg-center
          rounded-3xl shadow-xl border border-white/20
          "
      >
        {/* Empty div as purely visual card background */}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-20">
          <div className="bg-gradient-to-br from-pink-400 to-purple-500 p-6 rounded-2xl shadow-xl w-96 text-white">
            <h2 className="text-2xl font-bold mb-4">Create New Project</h2>
            <form onSubmit={createProject}>
              <div className="mb-4">
                <label className="block text-sm font-medium">Project Name</label>
                <input
                  onChange={(e) => setProjectName(e.target.value)}
                  value={projectName}
                  type="text"
                  className="mt-2 block w-full p-2 rounded-md bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Enter project name"
                  required
                />
              </div>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  className="px-4 py-2 rounded-md bg-white/20 hover:bg-white/30 transition-all"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-white text-purple-600 font-semibold hover:bg-gray-100 transition-all"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </main>
  );
};

export default Home;
