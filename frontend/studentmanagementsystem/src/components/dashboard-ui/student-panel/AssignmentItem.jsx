import { ClipboardList, Upload } from "lucide-react";

function AssignmentItem({ assignment, showAction, onSubmit }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl border bg-white">
      <div>
        <p className="font-medium">{assignment.title}</p>
        <p className="text-sm text-gray-500">
          Course: {assignment.course}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xs">{assignment.status}</span>

        {showAction && assignment.status !== "SUBMITTED" && (
          <button
            onClick={() => onSubmit(assignment)}
            className="text-indigo-600 flex items-center gap-1"
          >
            <Upload size={16} />
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default AssignmentItem;
