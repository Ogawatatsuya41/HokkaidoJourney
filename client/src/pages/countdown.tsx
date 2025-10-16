import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { ThemeToggle } from "@/components/theme-toggle";
import hokkaidoImage from "@assets/stock_images/hokkaido_japan_beaut_71cda826.jpg";

export default function CountdownPage() {
  const tripDate = new Date("2025-06-15");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = tripDate.getTime() - now.getTime();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hokkaidoImage})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70" />

      <div className="absolute top-4 right-4 z-10">
        // <ThemeToggle />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="font-accent text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            北海道への旅
          </h1>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-md">
            Our Hokkaido Adventure
          </p>
        </div>

        <div className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
          <TimeCard value={timeLeft.days} label="日" sublabel="Days" />
          <TimeCard value={timeLeft.hours} label="時間" sublabel="Hours" />
          <TimeCard value={timeLeft.minutes} label="分" sublabel="Minutes" />
          <TimeCard value={timeLeft.seconds} label="秒" sublabel="Seconds" />
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <Link href="/itinerary">
            <Button
              size="lg"
              className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-2xl px-8 py-6 text-lg font-semibold"
              data-testid="button-view-itinerary"
            >
              <Calendar className="mr-2 h-5 w-5" />
              旅行のしおりを見る
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function TimeCard({ value, label, sublabel }: { value: number; label: string; sublabel: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-2xl p-4 md:p-6 min-w-[100px] md:min-w-[140px] hover:bg-white/20 transition-all">
      <div className="text-4xl md:text-6xl font-bold text-white tabular-nums" data-testid={`text-countdown-${sublabel.toLowerCase()}`}>
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-sm md:text-base text-white/80 mt-2 font-medium">
        {label}
      </div>
      <div className="text-xs text-white/60 uppercase tracking-wider">
        {sublabel}
      </div>
    </div>
  );
}
