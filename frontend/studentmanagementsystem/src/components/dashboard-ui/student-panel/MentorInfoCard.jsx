import { UserCheck, Mail } from "lucide-react";

function MentorInfoCard({ name, email }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
      <div className="flex items-center justify-between">
        {/* Mentor Info */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-semibold">
            {name?.[0] || "M"}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {name || "Mentor not assigned"}
            </h3>
            {email && (
              <p className="text-sm text-slate-500 flex items-center gap-1">
                <Mail size={14} />
                {email}
              </p>
            )}
          </div>
        </div>

        {/* Badge */}
        <span className="flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full bg-emerald-50 text-emerald-600">
          <UserCheck size={14} />
          Mentor
        </span>
      </div>
    </div>
  );
}

export default MentorInfoCard;
