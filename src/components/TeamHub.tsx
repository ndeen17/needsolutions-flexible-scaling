import React, { useState, useRef, useCallback } from 'react';
import { 
  Code, 
  Palette, 
  Edit3, 
  Globe, 
  TrendingUp, 
  CheckSquare,
  User,
  Sparkles
} from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

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
  lastUpdate: number;
  lastTap: number;
}

const TeamHub = () => {
  const hubRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Store initial positions for reset functionality
  const initialPositions = useRef([
    { x: 20, y: 20 },
    { x: 80, y: 20 },
    { x: 80, y: 80 },
    { x: 20, y: 80 },
    { x: 50, y: 10 },
    { x: 90, y: 50 }
  ]);
  
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      id: 1,
      role: "AI Automation",
      icon: Sparkles,
      status: "Available",
      position: { x: 20, y: 20 }
    },
    {
      id: 2,
      role: "Software Dev",
      icon: Code,
      status: "Available",
      position: { x: 80, y: 20 }
    },
    {
      id: 3,
      role: "Graphic Design",
      icon: Palette,
      status: "Available",
      position: { x: 80, y: 80 }
    },
    {
      id: 4,
      role: "Content & SEO",
      icon: Edit3,
      status: "Available",
      position: { x: 20, y: 80 }
    },
    {
      id: 5,
      role: "Digital Marketing",
      icon: TrendingUp,
      status: "Available",
      position: { x: 50, y: 10 }
    },
    {
      id: 6,
      role: "Admin Support",
      icon: CheckSquare,
      status: "Available",
      position: { x: 90, y: 50 }
    }
  ]);

  const [dragState, setDragState] = useState<DragState>({
    active: false,
    memberId: null,
    offset: { x: 0, y: 0 },
    lastUpdate: 0,
    lastTap: 0
  });

  const updateMemberPosition = useCallback((memberId: number, newPosition: { x: number; y: number }) => {
    setTeamMembers(prev => 
      prev.map(member => {
        if (member.id === memberId) {
          // On mobile, optionally snap to a grid for better positioning
          if (isMobile) {
            const snapToGrid = (value: number, gridSize: number = 5) => {
              return Math.round(value / gridSize) * gridSize;
            };
            
            return { 
              ...member, 
              position: { 
                x: snapToGrid(newPosition.x), 
                y: snapToGrid(newPosition.y) 
              }
            };
          }
          return { ...member, position: newPosition };
        }
        return member;
      })
    );
  }, [isMobile]);

  // Reset all positions to initial state
  const resetAllPositions = useCallback(() => {
    setTeamMembers(prev => 
      prev.map((member, index) => ({
        ...member,
        position: initialPositions.current[index]
      }))
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
      },
      lastUpdate: Date.now(),
      lastTap: 0
    });
  }, [teamMembers]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!dragState.active || !dragState.memberId || !hubRef.current) return;

    // Throttle updates for better performance
    const now = Date.now();
    if (isMobile && now - dragState.lastUpdate < 16) return; // ~60fps

    const hubRect = hubRef.current.getBoundingClientRect();
    
    let leftPercent = ((e.clientX - dragState.offset.x - hubRect.left) / hubRect.width) * 100;
    let topPercent = ((e.clientY - dragState.offset.y - hubRect.top) / hubRect.height) * 100;

    // Keep within bounds (accounting for element size)
    const margin = isMobile ? 15 : 10;
    leftPercent = Math.max(margin, Math.min(100 - margin, leftPercent));
    topPercent = Math.max(margin, Math.min(100 - margin, topPercent));

    updateMemberPosition(dragState.memberId, { x: leftPercent, y: topPercent });
    
    // Update last update time
    setDragState(prev => ({ ...prev, lastUpdate: now }));
  }, [dragState, updateMemberPosition, isMobile]);

  const handleMouseUp = useCallback(() => {
    setDragState({
      active: false,
      memberId: null,
      offset: { x: 0, y: 0 },
      lastUpdate: 0,
      lastTap: 0
    });
  }, []);

  // Touch event handlers
  const handleTouchStart = useCallback((e: React.TouchEvent, memberId: number) => {
    e.preventDefault();
    e.stopPropagation();
    
    const now = Date.now();
    
    // Check for double tap
    if (isMobile && now - dragState.lastTap < 300) {
      // Double tap detected - reset position
      const memberIndex = teamMembers.findIndex(m => m.id === memberId);
      if (memberIndex !== -1) {
        updateMemberPosition(memberId, initialPositions.current[memberIndex]);
      }
      return;
    }
    
    // Prevent document scrolling on mobile
    document.body.style.overflow = 'hidden';
    
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
      },
      lastUpdate: Date.now(),
      lastTap: now
    });
  }, [teamMembers, dragState.lastTap, isMobile, updateMemberPosition]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!dragState.active || !dragState.memberId || !hubRef.current) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    // Throttle updates for better performance on mobile
    const now = Date.now();
    if (now - dragState.lastUpdate < 16) return; // ~60fps
    
    const touch = e.touches[0];
    const hubRect = hubRef.current.getBoundingClientRect();
    
    let leftPercent = ((touch.clientX - dragState.offset.x - hubRect.left) / hubRect.width) * 100;
    let topPercent = ((touch.clientY - dragState.offset.y - hubRect.top) / hubRect.height) * 100;

    // Enhanced mobile bounds - more generous margin for better UX
    const margin = isMobile ? 15 : 10;
    leftPercent = Math.max(margin, Math.min(100 - margin, leftPercent));
    topPercent = Math.max(margin, Math.min(100 - margin, topPercent));

    updateMemberPosition(dragState.memberId, { x: leftPercent, y: topPercent });
    
    // Update last update time
    setDragState(prev => ({ ...prev, lastUpdate: now }));
  }, [dragState, updateMemberPosition, isMobile]);

  const handleTouchEnd = useCallback(() => {
    // Re-enable document scrolling
    document.body.style.overflow = '';
    
    setDragState({
      active: false,
      memberId: null,
      offset: { x: 0, y: 0 },
      lastUpdate: 0,
      lastTap: 0
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
        className="relative w-full h-80 sm:h-96 md:h-[28rem] bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl sm:rounded-3xl border border-border/50 overflow-hidden"
        style={{ aspectRatio: isMobile ? '1.2' : '1' }}
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
              className={`absolute transition-all duration-300 select-none ${
                isDragging ? 'z-50 scale-110 shadow-2xl cursor-grabbing' : 'z-10 hover:scale-105 cursor-grab'
              } ${isMobile ? 'active:scale-105' : ''}`}
              style={{
                left: `${member.position.x}%`,
                top: `${member.position.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              onMouseDown={(e) => handleMouseDown(e, member.id)}
              onTouchStart={(e) => handleTouchStart(e, member.id)}
            >
              <div className={`
                bg-card border-2 rounded-xl sm:rounded-2xl p-3 sm:p-4 min-w-28 sm:min-w-32 text-center shadow-md
                transition-all duration-300 relative overflow-hidden
                ${isDragging 
                  ? 'shadow-2xl border-primary bg-primary/10 ring-2 ring-primary/20' 
                  : 'border-border/50 hover:shadow-lg hover:border-primary/50'
                }
                ${isMobile ? 'touch-manipulation active:scale-105' : ''}
                ${isMobile && !isDragging ? 'shadow-sm border-border/70' : ''}
              `}>
                {/* Mobile drag indicator */}
                {isMobile && (
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-1 bg-muted-foreground/30 rounded-full"></div>
                  </div>
                )}
                
                {/* Drag glow effect */}
                {isDragging && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-xl sm:rounded-2xl animate-pulse"></div>
                )}
                
                <div className={`relative z-10 w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2 transition-all duration-300 ${
                  isDragging ? 'bg-primary/20 scale-110' : ''
                }`}>
                  <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 text-primary transition-all duration-300 ${
                    isDragging ? 'text-primary scale-110' : ''
                  }`} />
                </div>
                <div className={`relative z-10 text-xs sm:text-xs font-medium mb-1 transition-colors duration-300 ${
                  isDragging ? 'text-primary' : 'text-foreground'
                }`}>
                  {member.role}
                </div>
                <div className={`relative z-10 text-xs transition-colors duration-300 ${
                  isDragging ? 'text-primary/70' : 'text-muted-foreground'
                }`}>
                  {member.status}
                </div>
              </div>
            </div>
          );
        })}

        {/* Central Hub - Project Manager */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="bg-primary text-primary-foreground rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg">
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-primary-foreground/20 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <User className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div className="text-xs sm:text-sm font-semibold">Project Manager</div>
            <div className="text-xs opacity-90">Coordinates All</div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-4 sm:mt-6 text-center px-4">
        <p className="text-muted-foreground text-xs sm:text-sm">
          <span className="font-medium">Try it:</span> {isMobile ? 'Tap and drag' : 'Drag'} the specialists around to see how our flexible model works.{' '}
          {isMobile && (
            <>Double-tap any specialist to reset their position. </>
          )}
          Your project manager coordinates everyone based on your current needs.
        </p>
        {isMobile && (
          <button 
            onClick={resetAllPositions}
            className="mt-3 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary text-xs rounded-lg transition-colors duration-200"
          >
            Reset All Positions
          </button>
        )}
      </div>
    </div>
  );
};

export default TeamHub;