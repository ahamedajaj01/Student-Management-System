import { User } from "lucide-react";

function StudentInfoCard({ name, email }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
      <div className="flex items-center space-x-4">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-semibold">
          {name?.[0] || "S"}
        </div>

        {/* Info */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            {name || "Student"}
          </h3>
          <p className="text-sm text-slate-500">{email}</p>
        </div>
      </div>
    </div>
  );
}

export default StudentInfoCard;
