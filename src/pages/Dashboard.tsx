// TODO: integrate Firebase Auth — replace mock auth with real authentication
import { Navigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  LayoutDashboard, FileText, ReceiptText, CreditCard, MessageSquare,
  Settings, LogOut, Bell, ChevronRight, Upload, TrendingUp, Clock, CheckCircle2, Menu, X
} from 'lucide-react'
import { useAuth } from '@/lib/auth'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: 'Overview', id: 'overview' },
  { icon: Upload, label: 'Documents', id: 'documents' },
  { icon: FileText, label: 'Returns', id: 'returns' },
  { icon: CreditCard, label: 'Invoices', id: 'invoices' },
  { icon: MessageSquare, label: 'Messages', id: 'messages' },
  { icon: Settings, label: 'Settings', id: 'settings' },
]

const MOCK_RETURNS = [
  { year: '2024', type: 'Federal + State (TX)', status: 'Filed', date: 'Apr 12, 2025' },
  { year: '2023', type: 'Federal + Multi-State', status: 'Filed', date: 'Mar 28, 2024' },
  { year: '2022', type: 'Federal + State (TX)', status: 'Filed', date: 'Apr 5, 2023' },
]

const MOCK_INVOICES = [
  { id: 'INV-2025-001', desc: '2024 Individual Tax Return', amount: '$189', status: 'Paid', date: 'Apr 1, 2025' },
  { id: 'INV-2024-001', desc: '2023 Multi-State Return', amount: '$249', status: 'Paid', date: 'Mar 15, 2024' },
]

export default function Dashboard() {
  const { user, signOut } = useAuth()
  const [activeNav, setActiveNav] = useState('overview')
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  // TODO: integrate Firebase Auth — redirect if not authenticated
  if (!user) return <Navigate to="/login" replace />

  const initials = user.name.split(' ').map(n => n[0]).join('')

  return (
    <div className="flex h-[calc(100vh-64px)] bg-slate-50 overflow-hidden">
      {/* Mobile sidebar overlay */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200 flex flex-col transition-transform duration-300 lg:translate-x-0',
          mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        aria-label="Dashboard navigation"
      >
        {/* Sidebar header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-deep flex items-center justify-center">
              <span className="text-white font-bold font-sora text-sm">T</span>
            </div>
            <span className="font-bold text-slate-900 font-sora">Portal</span>
          </div>
          <button className="lg:hidden text-slate-500 hover:text-slate-700" onClick={() => setMobileSidebarOpen(false)} aria-label="Close sidebar">
            <X size={18} />
          </button>
        </div>

        {/* User pill */}
        <div className="p-4">
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
            <div className="w-9 h-9 rounded-full bg-indigo-deep text-white flex items-center justify-center font-bold text-sm font-sora shrink-0">
              {initials}
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-slate-900 text-sm truncate">{user.name}</p>
              <p className="text-slate-500 text-xs truncate">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 pb-4 space-y-1 overflow-y-auto" aria-label="Dashboard pages">
          {NAV_ITEMS.map(({ icon: Icon, label, id }) => (
            <button
              key={id}
              onClick={() => { setActiveNav(id); setMobileSidebarOpen(false) }}
              className={cn(
                'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors text-left',
                activeNav === id
                  ? 'bg-indigo-deep text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              )}
              aria-current={activeNav === id ? 'page' : undefined}
            >
              <Icon size={17} aria-hidden="true" />
              {label}
            </button>
          ))}
        </nav>

        {/* Sign out */}
        <div className="p-4 border-t border-slate-100">
          <button
            onClick={signOut}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors"
          >
            <LogOut size={16} aria-hidden="true" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto" aria-label="Dashboard content">
        {/* Topbar */}
        <div className="sticky top-0 z-20 bg-white border-b border-slate-200 px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="lg:hidden text-slate-500 hover:text-slate-700 p-1" onClick={() => setMobileSidebarOpen(true)} aria-label="Open sidebar">
              <Menu size={20} />
            </button>
            <h1 className="font-bold text-slate-900 font-sora capitalize">{activeNav}</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative text-slate-500 hover:text-indigo-deep transition-colors p-1.5" aria-label="Notifications">
              <Bell size={18} aria-hidden="true" />
              <span className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-indigo-deep" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeNav === 'overview' && <OverviewContent user={user} />}
          {activeNav === 'documents' && <DocumentsContent />}
          {activeNav === 'returns' && <ReturnsContent />}
          {activeNav === 'invoices' && <InvoicesContent />}
          {activeNav === 'messages' && <MessagesContent />}
          {activeNav === 'settings' && <SettingsContent user={user} />}
        </div>
      </main>
    </div>
  )
}

function OverviewContent({ user }: { user: { name: string } }) {
  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h2 className="text-xl font-bold font-sora text-slate-900">Welcome back, {user.name.split(' ')[0]} 👋</h2>
        <p className="text-slate-500 text-sm mt-1">Here's a summary of your tax account.</p>
      </motion.div>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {[
          { icon: FileText, label: 'Returns Filed', value: '3', color: 'bg-indigo-deep text-white' },
          { icon: TrendingUp, label: 'Total Savings Found', value: '$4,820', color: 'bg-green-success text-white' },
          { icon: Clock, label: 'Avg. Turnaround', value: '36 hrs', color: 'bg-amber-gold text-white' },
        ].map(({ icon: Icon, label, value, color }) => (
          <div key={label} className="bg-white rounded-2xl border border-slate-200 p-5 flex items-center gap-4 shadow-sm">
            <div className={`w-11 h-11 rounded-xl ${color} flex items-center justify-center shrink-0`}>
              <Icon size={18} aria-hidden="true" />
            </div>
            <div>
              <div className="text-2xl font-bold font-sora text-slate-900">{value}</div>
              <div className="text-xs text-slate-500">{label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent activity */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-6">
        <h3 className="font-bold text-slate-900 font-sora mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[
            { label: '2024 Federal Return filed and accepted', date: 'Apr 12, 2025', icon: CheckCircle2, color: 'text-green-success' },
            { label: 'Invoice #INV-2025-001 paid', date: 'Apr 1, 2025', icon: CreditCard, color: 'text-blue-electric' },
            { label: 'Tax documents uploaded', date: 'Mar 28, 2025', icon: Upload, color: 'text-amber-gold' },
          ].map(({ label, date, icon: Icon, color }) => (
            <div key={label} className="flex items-center gap-3 py-2 border-b border-slate-50 last:border-0">
              <Icon size={16} className={color} aria-hidden="true" />
              <span className="text-slate-700 text-sm flex-1">{label}</span>
              <span className="text-slate-400 text-xs shrink-0">{date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Link to="/contact" className="flex items-center gap-3 bg-white rounded-2xl border border-slate-200 p-5 hover:border-indigo-deep/30 hover:shadow-card transition-all group">
          <MessageSquare size={20} className="text-indigo-deep" aria-hidden="true" />
          <div className="flex-1">
            <p className="font-semibold text-slate-900 text-sm">Message our team</p>
            <p className="text-slate-500 text-xs">Ask a question or request assistance</p>
          </div>
          <ChevronRight size={16} className="text-slate-400 group-hover:text-indigo-deep transition-colors" aria-hidden="true" />
        </Link>
        <a href="https://app.canopytax.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white rounded-2xl border border-slate-200 p-5 hover:border-indigo-deep/30 hover:shadow-card transition-all group">
          <Upload size={20} className="text-indigo-deep" aria-hidden="true" />
          <div className="flex-1">
            <p className="font-semibold text-slate-900 text-sm">Upload documents</p>
            <p className="text-slate-500 text-xs">Securely share files with our team</p>
          </div>
          <ChevronRight size={16} className="text-slate-400 group-hover:text-indigo-deep transition-colors" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}

function DocumentsContent() {
  return (
    <div className="text-center py-16">
      <div className="w-16 h-16 rounded-2xl bg-sky-tint flex items-center justify-center mx-auto mb-4">
        <Upload size={28} className="text-indigo-deep" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-bold font-sora text-slate-900 mb-2">No documents yet</h3>
      <p className="text-slate-500 text-sm mb-6 max-w-xs mx-auto">Upload your tax documents securely to get started with your filing.</p>
      <a href="https://app.canopytax.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-indigo-deep hover:bg-indigo-deep-dark text-white font-bold px-6 py-3 rounded-xl transition-all btn-shine">
        Upload via Portal
      </a>
    </div>
  )
}

function ReturnsContent() {
  return (
    <div>
      <h2 className="font-bold text-slate-900 font-sora mb-5">Your Tax Returns</h2>
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full text-left" aria-label="Tax returns">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Year</th>
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Type</th>
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date Filed</th>
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {MOCK_RETURNS.map(r => (
              <tr key={r.year} className="hover:bg-slate-50 transition-colors">
                <td className="px-5 py-4 font-bold text-slate-900 text-sm">{r.year}</td>
                <td className="px-5 py-4 text-slate-600 text-sm">{r.type}</td>
                <td className="px-5 py-4 text-slate-500 text-sm">{r.date}</td>
                <td className="px-5 py-4">
                  <span className="text-xs bg-green-success/10 text-green-success font-semibold px-2.5 py-1 rounded-full">{r.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function InvoicesContent() {
  return (
    <div>
      <h2 className="font-bold text-slate-900 font-sora mb-5">Your Invoices</h2>
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full text-left" aria-label="Invoices">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Invoice</th>
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Description</th>
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Amount</th>
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {MOCK_INVOICES.map(inv => (
              <tr key={inv.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-5 py-4 text-indigo-deep font-semibold text-sm">{inv.id}</td>
                <td className="px-5 py-4 text-slate-600 text-sm">{inv.desc}</td>
                <td className="px-5 py-4 font-bold text-slate-900 text-sm">{inv.amount}</td>
                <td className="px-5 py-4">
                  <span className="text-xs bg-green-success/10 text-green-success font-semibold px-2.5 py-1 rounded-full">{inv.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function MessagesContent() {
  return (
    <div className="text-center py-16">
      <div className="w-16 h-16 rounded-2xl bg-sky-tint flex items-center justify-center mx-auto mb-4">
        <MessageSquare size={28} className="text-indigo-deep" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-bold font-sora text-slate-900 mb-2">No messages yet</h3>
      <p className="text-slate-500 text-sm mb-6 max-w-xs mx-auto">Messages from your Taxagon team will appear here.</p>
      <Link to="/contact" className="inline-flex items-center gap-2 bg-indigo-deep hover:bg-indigo-deep-dark text-white font-bold px-6 py-3 rounded-xl transition-all btn-shine">
        Contact Our Team
      </Link>
    </div>
  )
}

function SettingsContent({ user }: { user: { name: string; email: string } }) {
  return (
    <div className="max-w-xl">
      <h2 className="font-bold text-slate-900 font-sora mb-6">Account Settings</h2>
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5">
        {[
          { label: 'Full Name', value: user.name },
          { label: 'Email Address', value: user.email },
          { label: 'Phone', value: 'Not set' },
          { label: 'Password', value: '••••••••' },
        ].map(({ label, value }) => (
          <div key={label} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{label}</p>
              <p className="text-slate-800 text-sm font-medium">{value}</p>
            </div>
            <button className="text-xs text-indigo-deep font-semibold hover:underline">Edit</button>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-slate-400">
        {/* TODO: integrate Firebase Auth */}
        Account management fully enabled after Firebase Auth integration.
      </p>
    </div>
  )
}
