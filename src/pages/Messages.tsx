import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format, isSameDay, parseISO, isAfter, startOfDay, isSameMonth } from "date-fns";
import { 
  Megaphone,
  FileText,
  Calendar,
  ExternalLink,
  Clock,
  CalendarDays,
  MapPin
} from "lucide-react";

// Thumbnails
import thumbReport from "@/assets/thumb-report.jpg";
import thumbFunding from "@/assets/thumb-funding.jpg";
import thumbDefi from "@/assets/thumb-defi.jpg";
import thumbWelcome from "@/assets/thumb-welcome.jpg";
import thumbWhitepaper from "@/assets/thumb-whitepaper.jpg";
import thumbBrand from "@/assets/thumb-brand.jpg";
import thumbQa from "@/assets/thumb-qa.jpg";
import thumbRoadmap from "@/assets/thumb-roadmap.jpg";
import thumbMeeting from "@/assets/thumb-meeting.jpg";

const channels = [
  { 
    id: "announcements", 
    name: "Announcements", 
    icon: Megaphone,
    description: "Official updates from U-topia"
  },
  { 
    id: "u-topia-materials", 
    name: "U-Topia Materials", 
    icon: FileText,
    description: "Resources, guides, and documentation"
  },
  { 
    id: "events-calendar", 
    name: "Events Calendar", 
    icon: Calendar,
    description: "Upcoming events and meetings"
  },
];

const channelContent: Record<string, Array<{
  id: number;
  title: string;
  content: string;
  date: string;
  time?: string;
  type: "announcement" | "resource" | "event";
  link?: string;
  thumbnail: string;
}>> = {
  "announcements": [
    {
      id: 1,
      title: "Q4 2024 Shareholder Report Released",
      content: "We are pleased to share our Q4 2024 performance report. Review our quarterly metrics, strategic initiatives, and roadmap for 2025.",
      date: "Dec 8, 2024",
      type: "announcement",
      thumbnail: thumbReport
    },
    {
      id: 2,
      title: "U-topia Secures Series B Funding",
      content: "We are thrilled to announce $50M in Series B funding to accelerate our mission of building the bank of the future.",
      date: "Dec 5, 2024",
      type: "announcement",
      thumbnail: thumbFunding
    },
    {
      id: 3,
      title: "New Digital Asset Features Coming Q1 2025",
      content: "Exciting new cryptocurrency integration and DeFi features are on the roadmap for early next year.",
      date: "Dec 2, 2024",
      type: "announcement",
      thumbnail: thumbDefi
    },
  ],
  "u-topia-materials": [
    {
      id: 1,
      title: "Shareholder Welcome Kit",
      content: "Everything you need to know as a U-topia shareholder. Includes governance, voting rights, and communication channels.",
      date: "Nov 15, 2024",
      type: "resource",
      link: "#",
      thumbnail: thumbWelcome
    },
    {
      id: 2,
      title: "U-Coin Tokenomics Whitepaper",
      content: "Detailed breakdown of U-Coin utility, distribution, and ecosystem integration.",
      date: "Nov 10, 2024",
      type: "resource",
      link: "#",
      thumbnail: thumbWhitepaper
    },
    {
      id: 3,
      title: "Brand Guidelines & Assets",
      content: "Official U-topia logos, colors, and brand usage guidelines for shareholders and partners.",
      date: "Oct 28, 2024",
      type: "resource",
      link: "#",
      thumbnail: thumbBrand
    },
  ],
  "events-calendar": [
    {
      id: 1,
      title: "Shareholder Q&A Session",
      content: "Live Q&A with the leadership team. Submit your questions in advance via the portal.",
      date: "2026-03-15",
      time: "3:00 PM EST",
      type: "event",
      thumbnail: thumbQa
    },
    {
      id: 2,
      title: "Product Roadmap Preview",
      content: "Exclusive look at upcoming features and 2026 product strategy.",
      date: "2026-03-22",
      time: "10:00 AM EST",
      type: "event",
      thumbnail: thumbRoadmap
    },
    {
      id: 3,
      title: "Annual Shareholder Meeting",
      content: "Virtual annual meeting with voting on key proposals and board updates.",
      date: "2026-03-28",
      time: "2:00 PM EST",
      type: "event",
      thumbnail: thumbMeeting
    },
    {
      id: 4,
      title: "DeFi Integration Workshop",
      content: "Hands-on workshop exploring our new DeFi tools and yield strategies.",
      date: "2026-04-05",
      time: "11:00 AM EST",
      type: "event",
      thumbnail: thumbDefi
    },
    {
      id: 5,
      title: "Q1 2026 Earnings Report",
      content: "Review of financial performance, growth metrics, and investor outlook.",
      date: "2026-04-12",
      time: "9:00 AM EST",
      type: "event",
      thumbnail: thumbReport
    },
    {
      id: 6,
      title: "Community Town Hall",
      content: "Open forum for shareholders to discuss platform direction and feedback.",
      date: "2026-04-20",
      time: "4:00 PM EST",
      type: "event",
      thumbnail: thumbWelcome
    },
    {
      id: 7,
      title: "Tokenomics Deep Dive",
      content: "Detailed walkthrough of U-Coin distribution changes and staking updates.",
      date: "2026-05-03",
      time: "1:00 PM EST",
      type: "event",
      thumbnail: thumbWhitepaper
    },
    {
      id: 8,
      title: "Brand Partnership Announcement",
      content: "Major collaboration reveal with a global fintech partner.",
      date: "2026-05-15",
      time: "12:00 PM EST",
      type: "event",
      thumbnail: thumbBrand
    },
    {
      id: 9,
      title: "Investor Networking Event",
      content: "Virtual networking session connecting shareholders with the founding team.",
      date: "2026-03-15",
      time: "6:00 PM EST",
      type: "event",
      thumbnail: thumbFunding
    },
  ],
};

function EventsCalendarView({ events, selectedDate, onSelectDate }: {
  events: typeof channelContent["events-calendar"];
  selectedDate: Date | undefined;
  onSelectDate: (date: Date | undefined) => void;
}) {
  const eventDates = events.map(e => parseISO(e.date));
  const selectedDayEvents = selectedDate
    ? events.filter(e => isSameDay(parseISO(e.date), selectedDate))
    : [];

  const [calendarMonth, setCalendarMonth] = useState<Date>(new Date());
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);

  const upcomingEvents = useMemo(() => {
    const today = startOfDay(new Date());
    return [...events]
      .filter(e => isAfter(parseISO(e.date), today) || isSameDay(parseISO(e.date), today))
      .sort((a, b) => parseISO(a.date).getTime() - parseISO(b.date).getTime());
  }, [events]);

  const eventsThisMonth = useMemo(() => {
    return events.filter(e => isSameMonth(parseISO(e.date), calendarMonth));
  }, [events, calendarMonth]);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Full-width Calendar */}
      <Card>
        <CardContent className="p-4">
          <CalendarComponent
            mode="single"
            selected={selectedDate}
            onSelect={onSelectDate}
            month={calendarMonth}
            onMonthChange={setCalendarMonth}
            className={cn("p-3 pointer-events-auto w-full")}
            modifiers={{ event: eventDates }}
            modifiersClassNames={{
              event: "bg-primary/20 text-primary font-bold rounded-md"
            }}
          />
        </CardContent>
      </Card>

      {/* Selected date info */}
      {selectedDate && selectedDayEvents.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">
            Events on {format(selectedDate, "MMMM d, yyyy")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {selectedDayEvents.map((item) => (
              <Card key={item.id} className="overflow-hidden border-primary/20 cursor-pointer hover:shadow-md transition-all" onClick={() => setSelectedEvent(item)}>
                <div className="aspect-video overflow-hidden">
                  <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-3">
                  <h3 className="font-semibold text-sm mb-1 text-foreground">{item.title}</h3>
                  <div className="flex items-center gap-1 text-xs text-primary mb-1.5">
                    <Clock className="h-3 w-3" />
                    <span>{item.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Upcoming Events — 4 columns, 2 rows */}
      <div>
        <h3 className="text-sm font-semibold text-muted-foreground mb-3">Upcoming Events</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {upcomingEvents.slice(0, 8).map((item) => (
            <Card
              key={item.id}
              className={cn(
                "overflow-hidden hover:shadow-md transition-all cursor-pointer group",
                selectedDate && isSameDay(parseISO(item.date), selectedDate) && "ring-1 ring-primary/30"
              )}
              onClick={() => {
                onSelectDate(parseISO(item.date));
                setCalendarMonth(parseISO(item.date));
              }}
            >
              <div className="aspect-video overflow-hidden relative">
                <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-2 left-2 bg-background/80 backdrop-blur-sm rounded-lg px-2 py-1 flex flex-col items-center">
                  <span className="text-[10px] font-medium text-primary leading-none">{format(parseISO(item.date), "MMM")}</span>
                  <span className="text-base font-bold text-primary leading-tight">{format(parseISO(item.date), "d")}</span>
                </div>
              </div>
              <CardContent className="p-3">
                <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-1">{item.title}</h3>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <Clock className="h-3 w-3" />
                  <span>{item.time}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Messages() {
  const [selectedChannel, setSelectedChannel] = useState("announcements");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const currentChannel = channels.find(c => c.id === selectedChannel);
  const content = channelContent[selectedChannel] || [];

  const isEventsChannel = selectedChannel === "events-calendar";
  const events = channelContent["events-calendar"] || [];

  return (
    <div className="h-[calc(100vh-2rem)] flex">
      {/* Channel List */}
      <div className="w-72 border-r bg-card flex-shrink-0">
        <div className="p-4 border-b">
          <h2 className="font-semibold">Channels</h2>
          <p className="text-xs text-muted-foreground">Stay informed with updates</p>
        </div>

        <div className="p-2">
          {channels.map((channel) => (
            <button
              key={channel.id}
              onClick={() => setSelectedChannel(channel.id)}
              className={`w-full text-left p-3 rounded-lg mb-1 transition-colors ${
                selectedChannel === channel.id
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-muted/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <channel.icon className="h-4 w-4 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{channel.name}</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {channel.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="p-4 border-b bg-card">
          <div className="flex items-center gap-3">
            {currentChannel && <currentChannel.icon className="h-5 w-5 text-muted-foreground" />}
            <div>
              <h2 className="font-semibold">{currentChannel?.name}</h2>
              <p className="text-sm text-muted-foreground">{currentChannel?.description}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <ScrollArea className="flex-1 p-6">
          {isEventsChannel ? (
            <EventsCalendarView
              events={events}
              selectedDate={selectedDate}
              onSelectDate={setSelectedDate}
            />
          ) : (
            <div className="max-w-3xl mx-auto space-y-4">
              {content.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow group">
                  <div className="flex">
                    <div className="w-40 h-28 flex-shrink-0 overflow-hidden">
                      <img 
                        src={item.thumbnail} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {item.type === "announcement" && "Announcement"}
                          {item.type === "resource" && "Resource"}
                          {item.type === "event" && "Event"}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{item.date}</span>
                      </div>
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{item.content}</p>
                    </CardContent>
                    {item.link && (
                      <div className="p-4 flex items-center">
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          )}
        </ScrollArea>
      </div>
    </div>
  );
}
