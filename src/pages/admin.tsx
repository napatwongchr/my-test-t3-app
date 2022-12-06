import { trpc } from "../utils/trpc";

export default function AdminDashboard() {
  const createAdminMutation = trpc.admin.createAdminAccount.useMutation();
  const createAdminAccountWithSupabaseJS =
    trpc.admin.createAdminAccountWithSupabaseJS.useMutation();

  return (
    <div>
      <h1>Let's Create Admin Account</h1>
      <button
        className="border-spacing-3 bg-purple-500 p-1 text-yellow-100"
        onClick={() => {
          createAdminMutation.mutate();
        }}
      >
        Create admin
      </button>
      <div>
        <button
          className="border-spacing-3 bg-slate-500 p-1 text-yellow-100"
          onClick={() => {
            createAdminAccountWithSupabaseJS.mutate();
          }}
        >
          Create admin with Supabase api
        </button>
      </div>
    </div>
  );
}
