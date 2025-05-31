import SubscribedBlogs from '@/commons/components/subscription/subscribed-blogs';

export default function SubscriptionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="mb-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight">My Subscriptions</h1>
          <p className="mt-2 text-lg text-muted-foreground">Manage and view your subscribed tech blogs</p>
        </div>
      </section>
      <SubscribedBlogs />
    </div>
  );
}
