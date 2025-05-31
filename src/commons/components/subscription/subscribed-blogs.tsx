'use client';

import { useState } from 'react';
import { Check, Plus, X } from 'lucide-react';
import { cn } from '@/commons/lib/utils';
import { companies } from '@/commons/lib/mock-data';
import { Button } from '@/commons/components/ui/button';
import { Input } from '@/commons/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/commons/components/ui/dialog';

export default function SubscribedBlogs() {
  const [subscribedCompanies, setSubscribedCompanies] = useState<string[]>(['Google', 'Microsoft', 'Vercel']);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSubscription = (company: string) => {
    setSubscribedCompanies((prev) => (prev.includes(company) ? prev.filter((c) => c !== company) : [...prev, company]));
  };

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Your Subscriptions</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-1.5">
              <Plus className="h-4 w-4" />
              Add Subscription
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Subscribe to Tech Blogs</DialogTitle>
            </DialogHeader>
            <div className="mt-4 space-y-4">
              <Input
                placeholder="Search companies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mb-4"
              />
              <div className="max-h-[300px] overflow-y-auto space-y-2">
                {filteredCompanies.map((company) => {
                  const isSubscribed = subscribedCompanies.includes(company.name);
                  return (
                    <div
                      key={company.name}
                      className={cn(
                        'flex items-center justify-between p-3 rounded-lg border',
                        isSubscribed && 'border-primary bg-primary/5',
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-md bg-secondary flex items-center justify-center">
                          <span className="font-semibold">{company.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h4 className="font-medium">{company.name}</h4>
                          <p className="text-xs text-muted-foreground">{company.postCount} posts</p>
                        </div>
                      </div>
                      <Button
                        variant={isSubscribed ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => toggleSubscription(company.name)}
                      >
                        {isSubscribed ? (
                          <>
                            <Check className="h-3.5 w-3.5 mr-1.5" /> Subscribed
                          </>
                        ) : (
                          'Subscribe'
                        )}
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {subscribedCompanies.length === 0 ? (
        <div className="text-center py-20">
          <h3 className="text-xl font-medium mb-2">No subscriptions yet</h3>
          <p className="text-muted-foreground mb-6">Subscribe to tech company blogs to see their content here</p>
        </div>
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {subscribedCompanies.map((company) => {
            const companyData = companies.find((c) => c.name === company);
            return (
              <div key={company} className="border rounded-xl p-4 bg-card flex flex-col">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-md bg-secondary flex items-center justify-center">
                      <span className="font-semibold text-lg">{company.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{company}</h3>
                      <p className="text-sm text-muted-foreground">{companyData?.postCount || 0} posts</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-destructive"
                    onClick={() => toggleSubscription(company)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-sm">Latest update: {companyData?.lastUpdate || 'No recent posts'}</p>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      // Handle view posts action
                    }}
                  >
                    View Latest Posts
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
