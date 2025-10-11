import React, { useState, useRef, useCallback } from 'react';
import { 
  Code, 
  Palette, 
  Edit3, 
  Globe, 
  Video, 
  CheckSquare,
  User
} from 'lucide-react';

interface TeamMember {
  id: number;
  role: string;
  icon: React.ComponentType<any>;
  status: string;
  position: { x: number; y: number };
}

interface DragState {
  active: boolean;
  memberId: number | null;
  offset: { x: number; y: number };
}

const TeamHub = () => {
  const hubRef = useRef<HTMLDivElement>(null);
  
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      id: 1,
      role: "Software Dev",
      icon: Code,
      status: "Available",
      position: { x: 20, y: 20 }
    },
    {
      id: 2,
      role: "Graphic Design",
      icon: Palette,
      status: "Available",
      position: { x: 80, y: 20 }
    },
    {
      id: 3,
      role: "Content & SEO",
      icon: Edit3,
      status: "Available",
      position: { x: 80, y: 80 }
    },
    {
      id: 4,
      role: "Website Design",
      icon: Globe,
      status: "Available",
      position: { x: 20, y: 80 }
    },
    {
      id: 5,
      role: "Admin Support",
      icon: CheckSquare,
      status: "Available",
      position: { x: 50, y: 10 }
    },
    {
      id: 6,
      role: "Video Editing",
      icon: Video,
      status: "Available",
      position: { x: 90, y: 50 }
    }
  ]);

  const [dragState, setDragState] = useState<DragState>({
    active: false,
    memberId: null,
    offset: { x: 0, y: 0 }
  });

  const updateMemberPosition = useCallback((memberId: number, newPosition: { x: number; y: number }) => {
    setTeamMembers(prev => 
      prev.map(member => 
        member.id === memberId 
          ? { ...member, position: newPosition }
          : member
      )
    );
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent, memberId: number) => {
    e.preventDefault();
    const hubRect = hubRef.current?.getBoundingClientRect();
    if (!hubRect) return;

    const member = teamMembers.find(m => m.id === memberId);
    if (!member) return;

    const memberElement = e.currentTarget as HTMLElement;
    const memberRect = memberElement.getBoundingClientRect();

    setDragState({
      active: true,
      memberId,
      offset: {
        x: e.clientX - memberRect.left,
        y: e.clientY - memberRect.top
      }
    });
  }, [teamMembers]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!dragState.active || !dragState.memberId || !hubRef.current) return;

    const hubRect = hubRef.current.getBoundingClientRect();
    
    let leftPercent = ((e.clientX - dragState.offset.x - hubRect.left) / hubRect.width) * 100;
    let topPercent = ((e.clientY - dragState.offset.y - hubRect.top) / hubRect.height) * 100;

    // Keep within bounds (accounting for element size)
    leftPercent = Math.max(10, Math.min(90, leftPercent));
    topPercent = Math.max(10, Math.min(90, topPercent));

    updateMemberPosition(dragState.memberId, { x: leftPercent, y: topPercent });
  }, [dragState, updateMemberPosition]);

  const handleMouseUp = useCallback(() => {
    setDragState({
      active: false,
      memberId: null,
      offset: { x: 0, y: 0 }
    });
  }, []);

  // Touch event handlers
  const handleTouchStart = useCallback((e: React.TouchEvent, memberId: number) => {
    e.preventDefault();
    const touch = e.touches[0];
    const hubRect = hubRef.current?.getBoundingClientRect();
    if (!hubRect) return;

    const member = teamMembers.find(m => m.id === memberId);
    if (!member) return;

    const memberElement = e.currentTarget as HTMLElement;
    const memberRect = memberElement.getBoundingClientRect();

    setDragState({
      active: true,
      memberId,
      offset: {
        x: touch.clientX - memberRect.left,
        y: touch.clientY - memberRect.top
      }
    });
  }, [teamMembers]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!dragState.active || !dragState.memberId || !hubRef.current) return;
    
    e.preventDefault();
    const touch = e.touches[0];
    const hubRect = hubRef.current.getBoundingClientRect();
    
    let leftPercent = ((touch.clientX - dragState.offset.x - hubRect.left) / hubRect.width) * 100;
    let topPercent = ((touch.clientY - dragState.offset.y - hubRect.top) / hubRect.height) * 100;

    // Keep within bounds
    leftPercent = Math.max(10, Math.min(90, leftPercent));
    topPercent = Math.max(10, Math.min(90, topPercent));

    updateMemberPosition(dragState.memberId, { x: leftPercent, y: topPercent });
  }, [dragState, updateMemberPosition]);

  const handleTouchEnd = useCallback(() => {
    setDragState({
      active: false,
      memberId: null,
      offset: { x: 0, y: 0 }
    });
  }, []);

  // Add global event listeners
  React.useEffect(() => {
    if (dragState.active) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [dragState.active, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Team Hub Container */}
      <div 
        ref={hubRef}
        className="relative w-full h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl border border-border/50 overflow-hidden"
        style={{ aspectRatio: '1' }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--primary)_0%,_transparent_50%)] opacity-20" />
        </div>

        {/* Connection Lines SVG */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {teamMembers.map(member => (
            <line
              key={`line-${member.id}`}
              x1="50"
              y1="50"
              x2={member.position.x}
              y2={member.position.y}
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              opacity="0.4"
              className="transition-all duration-300"
            />
          ))}
        </svg>

        {/* Team Members */}
        {teamMembers.map(member => {
          const IconComponent = member.icon;
          const isDragging = dragState.active && dragState.memberId === member.id;
          
          return (
            <div
              key={member.id}
              className={`absolute cursor-move transition-all duration-300 ${
                isDragging ? 'z-50 scale-110 shadow-lg' : 'z-10 hover:scale-105'
              }`}
              style={{
                left: `${member.position.x}%`,
                top: `${member.position.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              onMouseDown={(e) => handleMouseDown(e, member.id)}
              onTouchStart={(e) => handleTouchStart(e, member.id)}
            >
              <div className={`
                bg-card border border-border/50 rounded-2xl p-4 min-w-32 text-center shadow-md
                hover:shadow-lg hover:border-primary/50 transition-all duration-300
                ${isDragging ? 'shadow-xl border-primary bg-primary/5' : ''}
              `}>
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>
                <div className="text-xs font-medium text-foreground mb-1">
                  {member.role}
                </div>
                <div className="text-xs text-muted-foreground">
                  {member.status}
                </div>
              </div>
            </div>
          );
        })}

        {/* Central Hub - Project Manager */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="bg-primary text-primary-foreground rounded-2xl p-6 text-center shadow-lg">
            <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <User className="w-6 h-6" />
            </div>
            <div className="text-sm font-semibold">Project Manager</div>
            <div className="text-xs opacity-90">Coordinates All</div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-6 text-center">
        <p className="text-muted-foreground text-sm">
          <span className="font-medium">Try it:</span> Drag the specialists around to see how our flexible model works. 
          Your project manager coordinates everyone based on your current needs.
        </p>
      </div>
    </div>
  );
};

export default TeamHub;