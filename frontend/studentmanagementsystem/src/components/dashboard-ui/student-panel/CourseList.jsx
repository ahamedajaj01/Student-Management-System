import { BookOpen } from "lucide-react";

function CourseList({ courses = [] }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Enrolled Courses
        </h3>
        <span className="text-sm text-slate-500">
          {courses.length} total
        </span>
      </div>

      {courses.length === 0 ? (
        <p className="text-sm text-slate-500">
          No courses enrolled yet.
        </p>
      ) : (
        <ul className="space-y-3">
          {courses.map(course => (
            <li
              key={course.id}
              className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition"
            >
              <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                <BookOpen size={18} />
              </div>

              <span className="font-medium text-slate-800">
                {course.title}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CourseList;
