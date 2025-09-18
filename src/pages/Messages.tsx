import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  Send, 
  Paperclip, 
  Smile, 
  Search,
  Hash,
  Users,
  Phone,
  Video,
  MoreVertical
} from "lucide-react";

const channels = [
  { name: "general", unread: 3, lastMessage: "Great progress everyone!", online: true },
  { name: "accountability-check", unread: 0, lastMessage: "Weekly goals submitted", online: false },
  { name: "wins-celebrations", unread: 7, lastMessage: "🎉 Sarah hit her revenue target!", online: true },
  { name: "resources-sharing", unread: 1, lastMessage: "New marketing course link", online: true },
];

const messages = [
  {
    id: 1,
    user: "Sarah Chen",
    avatar: "SC",
    message: "Just hit my monthly revenue goal! 🎉 Thanks for all the accountability check-ins, they really kept me focused.",
    time: "2:34 PM",
    reactions: [{ emoji: "🎉", count: 5 }, { emoji: "👏", count: 3 }]
  },
  {
    id: 2,
    user: "Mike Rodriguez",
    avatar: "MR",
    message: "Congrats Sarah! That's amazing. I'm still working on my user acquisition targets. Anyone have experience with LinkedIn outreach?",
    time: "2:37 PM",
    reactions: []
  },
  {
    id: 3,
    user: "Alex Johnson",
    avatar: "AJ",
    message: "Mike, I've had great success with LinkedIn. Let me share my template in the resources channel.",
    time: "2:41 PM",
    reactions: [{ emoji: "🙏", count: 2 }]
  },
  {
    id: 4,
    user: "Emma Davis",
    avatar: "ED",
    message: "Team check-in reminder: Please share your weekly progress by Friday. Remember to include both wins and challenges!",
    time: "3:15 PM",
    reactions: []
  },
];

export default function Messages() {
  const [selectedChannel, setSelectedChannel] = useState("wins-celebrations");
  const [newMessage, setNewMessage] = useState("");

  return (
    <div className="h-[calc(100vh-2rem)] flex">
      {/* Channel List */}
      <div className="w-80 border-r bg-card">
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search channels..."
              className="pl-10 bg-muted/30"
            />
          </div>
        </div>

        <ScrollArea className="h-full">
          <div className="p-2">
            <h3 className="px-3 py-2 text-sm font-semibold text-muted-foreground uppercase">
              Channels
            </h3>
            
            {channels.map((channel) => (
              <button
                key={channel.name}
                onClick={() => setSelectedChannel(channel.name)}
                className={`w-full text-left p-3 rounded-lg mb-1 transition-colors ${
                  selectedChannel === channel.name
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-muted/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Hash className="h-4 w-4" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{channel.name}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        {channel.lastMessage}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    {channel.unread > 0 && (
                      <Badge variant="default" className="h-5 px-1.5 text-xs">
                        {channel.unread}
                      </Badge>
                    )}
                    <div className={`w-2 h-2 rounded-full ${
                      channel.online ? 'bg-green-500' : 'bg-gray-300'
                    }`} />
                  </div>
                </div>
              </button>
            ))}

            <Separator className="my-4" />

            <h3 className="px-3 py-2 text-sm font-semibold text-muted-foreground uppercase">
              Direct Messages
            </h3>
            
            {["John Smith", "Sarah Chen", "Mike Rodriguez"].map((user) => (
              <button
                key={user}
                className="w-full text-left p-3 rounded-lg mb-1 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white text-sm font-medium">
                      {user.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{user}</p>
                    <p className="text-xs text-muted-foreground">Online</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b bg-card">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Hash className="h-5 w-5 text-muted-foreground" />
              <div>
                <h2 className="font-semibold">#{selectedChannel}</h2>
                <p className="text-sm text-muted-foreground">8 members</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Video className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Users className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="flex space-x-3 group">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                  {message.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline space-x-2">
                    <span className="font-semibold text-sm">{message.user}</span>
                    <span className="text-xs text-muted-foreground">{message.time}</span>
                  </div>
                  <p className="text-sm mt-1 leading-relaxed">{message.message}</p>
                  {message.reactions.length > 0 && (
                    <div className="flex items-center space-x-1 mt-2">
                      {message.reactions.map((reaction, index) => (
                        <button
                          key={index}
                          className="flex items-center space-x-1 px-2 py-1 rounded-full bg-muted/50 hover:bg-muted text-xs"
                        >
                          <span>{reaction.emoji}</span>
                          <span>{reaction.count}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="p-4 border-t bg-card">
          <div className="flex items-end space-x-2">
            <Button variant="ghost" size="sm" className="shrink-0">
              <Paperclip className="h-4 w-4" />
            </Button>
            <div className="flex-1 relative">
              <Input
                placeholder={`Message #${selectedChannel}`}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="pr-20"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    // Handle send message
                    setNewMessage("");
                  }
                }}
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
                <Button variant="ghost" size="sm">
                  <Smile className="h-4 w-4" />
                </Button>
                <Button 
                  size="sm" 
                  disabled={!newMessage.trim()}
                  onClick={() => {
                    // Handle send message
                    setNewMessage("");
                  }}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}