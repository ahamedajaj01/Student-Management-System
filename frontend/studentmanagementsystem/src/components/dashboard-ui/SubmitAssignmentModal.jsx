import { useState } from "react";
function SubmitAssignmentModal({
  open,
  assignment,
  onClose,
  onSubmit,
  loading = false,
}) {
    const [content, setContent] = useState("");
  if (!open || !assignment) return null;

   const handleSubmit = () => {
    onSubmit({
      assignmentId: assignment.id,
      content,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-xl">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          Submit Assignment
        </h2>

        <p className="text-sm text-slate-500 mb-4">
          {assignment.title} — {assignment.course}
        </p>

        <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
          placeholder="Write your submission here..."
          className="w-full h-32 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubmitAssignmentModal;
