import { Check, X } from 'lucide-react'

export default function Toast({ message, type = 'success' }) {
  return (
    <div className="fixed bottom-4 right-4 z-50 toast">
      <div className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg ${
        type === 'success'
          ? 'bg-green-50 text-green-900 border border-green-200'
          : 'bg-red-50 text-red-900 border border-red-200'
      }`}>
        {type === 'success' ? <Check size={20} /> : <X size={20} />}
        <p className="text-sm font-medium">{message}</p>
      </div>
    </div>
  )
}
