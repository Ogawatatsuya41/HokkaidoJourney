import { useState } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/theme-toggle";
import { ActivityCard } from "@/components/activity-card";
import { ActivityDialog } from "@/components/activity-dialog";
import type { Activity } from "@shared/schema";

export default function ItineraryPage() {
  const [selectedDay, setSelectedDay] = useState("1");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingActivity, setEditingActivity] = useState<Activity | undefined>(undefined);

  const { data: activities = [], isLoading } = useQuery<Activity[]>({
    queryKey: ["/api/activities"],
  });

  const handleAddActivity = () => {
    setEditingActivity(undefined);
    setIsDialogOpen(true);
  };

  const handleEditActivity = (activity: Activity) => {
    setEditingActivity(activity);
    setIsDialogOpen(true);
  };

  const getDayActivities = (day: number) => {
    return activities
      .filter((a) => a.day === day)
      .sort((a, b) => a.time.localeCompare(b.time));
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon" data-testid="button-back-to-countdown">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back to countdown</span>
              </Button>
            </Link>
            <h1 className="font-accent text-2xl md:text-3xl font-bold">
              旅行のしおり
            </h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <Tabs value={selectedDay} onValueChange={setSelectedDay} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 h-auto p-1 gap-1">
            {[1, 2, 3, 4, 5].map((day) => (
              <TabsTrigger
                key={day}
                value={day.toString()}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg py-3"
                data-testid={`tab-day-${day}`}
              >
                <span className="hidden md:inline">Day </span>
                {day}
              </TabsTrigger>
            ))}
          </TabsList>

          {[1, 2, 3, 4, 5].map((day) => (
            <TabsContent key={day} value={day.toString()} className="mt-0">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                  {day}日目
                </h2>
                <Button
                  onClick={handleAddActivity}
                  className="gap-2"
                  data-testid={`button-add-activity-day-${day}`}
                >
                  <Plus className="h-4 w-4" />
                  予定を追加
                </Button>
              </div>

              {isLoading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-32 rounded-2xl bg-muted animate-pulse"
                    />
                  ))}
                </div>
              ) : getDayActivities(day).length === 0 ? (
                <div className="text-center py-16 px-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Calendar className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">
                    まだ予定が登録されていません
                  </p>
                  <Button
                    onClick={handleAddActivity}
                    variant="outline"
                    className="gap-2"
                    data-testid={`button-add-first-activity-day-${day}`}
                  >
                    <Plus className="h-4 w-4" />
                    最初の予定を追加
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {getDayActivities(day).map((activity) => (
                    <ActivityCard
                      key={activity.id}
                      activity={activity}
                      onEdit={() => handleEditActivity(activity)}
                    />
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </main>

      <ActivityDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        activity={editingActivity}
        currentDay={parseInt(selectedDay)}
      />
    </div>
  );
}

function Calendar({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}
