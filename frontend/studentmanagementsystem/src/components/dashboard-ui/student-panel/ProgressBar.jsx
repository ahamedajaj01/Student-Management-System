import React from 'react'

function ProgressBar({ value = 0 }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-slate-900">
          Overall Progress
        </h3>
        <span className="text-sm font-semibold text-indigo-600">
          {value}%
        </span>
      </div>

      <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-indigo-600 rounded-full transition-all duration-300"
          style={{ width: `${value}%` }}
        />
      </div>

      <p className="text-xs text-slate-500 mt-2">
        Based on completed assignments and course progress
      </p>
    </div>
  );
}

export default ProgressBar;

