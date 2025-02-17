import { useState } from "react";

interface CreateLabelProps {
  onCreate: (name: string, category: string) => void;
  onCancel: () => void;
}

const CreateLabel: React.FC<CreateLabelProps> = ({ onCreate, onCancel }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Goals");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate(name, category);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
        <h2 className="text-xl font-bold mb-4">Create new Label</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter Label Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Category Label</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="Goals">Goals</option>
              <option value="Customer Type">Customer Type</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateLabel;
