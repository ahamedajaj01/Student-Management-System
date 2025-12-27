import AssignmentItem from "./AssignmentItem";

function AssignmentList({ assignments = [], showActions = false, onSubmit }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Assignments
        </h3>
        <span className="text-sm text-slate-500">
          {assignments.length} total
        </span>
      </div>

      {assignments.length === 0 ? (
        <p className="text-sm text-slate-500">
          No assignments assigned yet.
        </p>
      ) : (
       <div className="space-y-3">
          {assignments.map(a => (
            <AssignmentItem
              key={a.id}
              assignment={a}
              showAction={showActions}
              onSubmit={onSubmit}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default AssignmentList;
